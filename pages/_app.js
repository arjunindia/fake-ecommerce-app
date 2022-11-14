import "../styles/globals.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useLocalStorage } from "@rehooks/local-storage";
import {
  Button,
  Navbar,
  Dropdown,
  Indicator,
  Badge,
  Card,
  Mask,
  Theme,
  Footer,
} from "react-daisyui";
const icon = `https://loremicon.com/ngon/128/128/94996301/png`;

function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState([]);
  const [cost, setCost] = useState(0);
  function addToCart(items, price) {
    setCart([...cart, items]);
    setCost(cost + price);
  }
  const [defTheme, setTheme] = useState("default");
  const [avatar, setAvatar] = useState("");
  const [theme, _] = useLocalStorage("theme", "default");
  useEffect(() => {
    setTheme(theme);
  }, [theme]);
  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/users?offset=0&limit=1")
      .then((res) => res.json())
      .then((data) => {
        setAvatar(data[0].avatar);
      });
  }, []);

  return (
    <>
      {/* Navbar */}
      <Theme dataTheme={defTheme}>
        <div className="pb-5 flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
          <Navbar>
            <div className="flex-1">
              <Link href={"/"} passHref>
                <Button className="text-xl normal-case" color="ghost">
                  <Mask
                    src={icon}
                    alt="Fake Ecommerce logo"
                    variant="squircle"
                    className=" w-10"
                  />

                  <span className="px-5">Fake Ecommerce</span>
                </Button>
              </Link>
            </div>
            <div className="flex-none">
              <Dropdown vertical="end">
                <Button tabIndex={0} color="ghost" shape="circle">
                  <Indicator item={<Badge size="sm">{cart.length}</Badge>}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </Indicator>
                </Button>
                <Dropdown.Menu
                  tabIndex={0}
                  className="mt-3 card card-compact  w-52 bg-base-100 !p-0"
                >
                  <Card.Body className="card-body">
                    {cart.length > 0 ? (
                      cart.map((item, idx) => <span key={idx}>{item}</span>)
                    ) : (
                      <span>Cart is empty</span>
                    )}
                    <span className="text-info">Subtotal: ${cost}</span>
                    <Card.Actions>
                      <Button color="primary" fullWidth>
                        View cart
                      </Button>
                    </Card.Actions>
                  </Card.Body>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown vertical="end">
                <Button color="ghost" className="avatar" shape="circle">
                  <div className="w-10 rounded-full">
                    <img src={avatar} alt="Profile Icon" />
                  </div>
                </Button>
                <Dropdown.Menu className="w-52 menu-compact">
                  <li>
                    <Link href={"/profile"} passHref legacyBehavior>
                      <a className="justify-between">
                        Profile
                        <span className="badge">New</span>
                      </a>
                    </Link>
                  </li>
                  <Link href={"/settings"} passHref legacyBehavior>
                    <Dropdown.Item>Settings</Dropdown.Item>
                  </Link>
                  <Dropdown.Item>Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Navbar>
        </div>
        <Component {...pageProps} addToCart={addToCart} />
        <Footer className="p-10 bg-neutral text-neutral-content">
          <div>
            <svg
              width="50"
              height="50"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
              className="fill-current"
            >
              <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
            </svg>
            <p>
              ACME Industries Ltd.
              <br />
              Providing reliable tech since 1992
            </p>
          </div>

          <div>
            <Footer.Title>Services</Footer.Title>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </div>
          <div>
            <Footer.Title>Company</Footer.Title>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </div>
          <div>
            <Footer.Title>Legal</Footer.Title>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </div>
        </Footer>
      </Theme>
    </>
  );
}

export default MyApp;

import { Mask, Card, Button, Modal } from "react-daisyui";
import { useState } from "react";
import Head from "next/head";
export default function Profile({ data }) {
  console.log(data);
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    setVisible(!visible);
  };
  return (
    <>
      <Head>
        <title>Profile</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main>
        <Card className="py-10">
          <Mask
            src={data.avatar}
            variant="squircle"
            alt="Profile Image"
            className="w-18 mx-auto"
          />

          <Card.Body className="items-center text-center">
            <Card.Title tag="h2">{data.name}</Card.Title>
            <p>Our precious {data.role}.</p>
            <Card.Actions className="justify-end">
              <Button onClick={toggleVisible} color="primary">
                Verify your email
              </Button>
            </Card.Actions>
          </Card.Body>
        </Card>
        <Modal open={visible} onClickBackdrop={toggleVisible}>
          <Modal.Header className="font-bold">Your Email:</Modal.Header>

          <Modal.Body>
            <p>{data.email}</p>
          </Modal.Body>
        </Modal>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(
    `https://api.escuelajs.co/api/v1/users?offset=0&limit=1`
  );
  const [data] = await res.json();

  return { props: { data } };
}

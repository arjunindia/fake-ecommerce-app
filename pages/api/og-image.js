import { withOGImage } from "next-api-og-image";
const icon = `https://loremicon.com/ngon/128/128/94996301/png`;
export default withOGImage({
  template: {
    // include HTML template here
    html: ({ name, stage }) => `
    <img src="${icon}" />
    <h1>${name} - ${stage}</h1>`,
  },
  cacheControl: "public, max-age=604800, immutable",
  dev: {
    inspectHtml: false,
  },
});

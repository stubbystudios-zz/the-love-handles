import Container from "./container";
import { EXAMPLE_PATH } from "../lib/constants";

export default function Footer() {
  return (
    <footer className="component-footer">
      <Container>
        <h3>
        <a
            href="https://nextjs.org/docs/basic-features/pages"
            className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
          >Statically Generated with Next.js.</a>
        </h3>
      </Container>
    </footer>
  );
}

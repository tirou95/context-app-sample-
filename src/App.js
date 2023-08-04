import Heading from "./components/heading.js";
import Section from "./components/section.js";
import "./styles.css";

export default function App() {
  console.log("app");
  return (
    <Section>
      <Heading>Title</Heading>
      <Section>
        <Heading>heading</Heading>
        <Heading>heading</Heading>
        <Heading>heading</Heading>
        <Section>
          <Heading>sub-heading</Heading>
          <Heading>sub-heading</Heading>
          <Heading>sub-heading</Heading>
          <Section>
            <Heading>sub-sub-heading</Heading>
            <Heading>sub-sub-heading</Heading>
            <Heading>sub-sub-heading</Heading>
          </Section>
        </Section>
      </Section>
    </Section>
  );
}

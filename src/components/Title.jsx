import { string } from "prop-types";
import { Helmet } from "react-helmet-async";
export function Title({ title }) {
  console.log("rendering");
  return (
    <Helmet>
      <title>{title ? `${title} -` : ""} John MacKenzie</title>
    </Helmet>
  );
}

Title.propTypes = {
  title: string,
};

Title.defaultValues = {
  title: "",
};

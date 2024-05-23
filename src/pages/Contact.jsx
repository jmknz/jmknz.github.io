import { Form, redirect } from "react-router-dom";
import { Title } from "../components/Title";

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  console.log({ data });
  return redirect("/");
}

export function Contact() {
  return (
    <>
      <Title title="Contact Me" />
      <h2>Contact Me</h2>
      <Form method="post">
        <fieldset>
          <label>
            <span data-label>Your name</span>
            <input type="text" name="your_name" required />
          </label>
          <label>
            <span data-label>Your email</span>
            <input type="email" name="your_email" required />
          </label>
          <label>
            <span data-label>Your message</span>
            <textarea name="your_message" required></textarea>
          </label>
          <footer>
            <button type="submit">Send</button>
          </footer>
        </fieldset>
      </Form>
    </>
  );
}

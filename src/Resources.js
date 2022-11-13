import {
  TextInput,
  Text,
  Button,
  Group,
  Box,
  Center,
  Notification,
  Alert,
} from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { useForm } from "@mantine/form";
import { useDidUpdate } from "@mantine/hooks";
import db from "./firebase";
import { v4 as uuidv4 } from "uuid";
import { collection, addDoc } from "firebase/firestore";
import { Navigate, Link } from "react-router-dom";
import { useState } from "react";
import { Check } from "tabler-icons-react";

const Resources = ({ text, resource_id, id }) => {
  const [redirect, setRedirect] = useState(false);
  const [formApproved, setFormApproved] = useState(false);
  const form = useForm({
    initialValues: {
      email: "",
      name: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const collecctionRef = collection(db, "clients");
    const payload = {
      name: form.getInputProps("name").value,
      email: form.getInputProps("email").value,
    };
    await addDoc(collecctionRef, payload);
    setFormApproved(true);
    setTimeout(() => setRedirect(true), 3000);
  };
  if (redirect) {
    let path_to_resource = `0; url = ./${resource_id}.pdf`;
    return <meta http-equiv="refresh" content={path_to_resource} />;
  } else {
    return (
      <div className="contentContainer" id={id}>
        <Text
          id="my-projects"
          size="xl"
          color="white"
          align="center"
          weight={250}
          className="contentContainer"
          margin="md"
        >
          {text}
        </Text>
        <Box sx={{ maxWidth: 300 }} mx="auto">
          <form onSubmit={handleSubmit}>
            <TextInput
              required
              label="Name"
              placeholder="Your name..."
              {...form.getInputProps("name")}
            />

            <TextInput
              required
              label="Email"
              placeholder="your@email.com"
              {...form.getInputProps("email")}
            />

            <Group position="right" mt="md">
              <Button type="submit" onClick={console.log("click")}>
                Get
              </Button>
            </Group>
            {formApproved ? (
              <Notification
                className="contentContainer"
                icon={<Check size={18} />}
                color="teal"
                title="Done!"
                disallowClose
              >
                You will be redirected to the materials in 3 seconds. If not{" "}
                <a href={`./${resource_id}.pdf`}>Click here</a>
              </Notification>
            ) : (
              "*Your data will be stored on my server"
            )}
          </form>
        </Box>
      </div>
    );
  }
};

export default Resources;

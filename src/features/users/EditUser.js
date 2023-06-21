import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button";
import TextField from "../../components/TextField";
import { editUser } from "./userSlice";

const EditUser = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const users = useSelector((store) => store.users);
  const navigate = useNavigate();
  const existingUser = users.filter((user) => user.id === params.id);
  const { name, title, message } = existingUser[0];
  const [values, setValues] = useState({
    name,
    title,
    message,
  });

  const handleEditUser = () => {
    setValues({ name: "", title: "", message: "" });
    dispatch(
      editUser({
        id: params.id,
        name: values.name,
        title: values.title,
        message: values.message,
      })
    );
    navigate("/");
  };

  return (
    <div className="mt-10 max-w-xl mx-auto">
      <TextField
        label="Name"
        value={values.name}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
        inputProps={{ type: "text", placeholder: "Jhon Doe" }}
      />
      <br />
      <TextField
        label="Title"
        value={values.title}
        onChange={(e) => setValues({ ...values, title: e.target.value })}
        inputProps={{ type: "text", placeholder: "Title" }}
      />
      <br />
      <TextField
        label="Message"
        value={values.message}
        onChange={(e) => setValues({ ...values, message: e.target.value })}
        inputProps={{ type: "message", placeholder: "Writte here" }}
      />

      <Button onClick={handleEditUser}>Edit</Button>
    </div>
  );
};

export default EditUser;

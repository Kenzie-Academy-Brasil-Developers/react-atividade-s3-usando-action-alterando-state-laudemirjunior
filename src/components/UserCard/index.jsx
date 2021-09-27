import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "../../store/modules/user/actions";

const UserCard = () => {
  const [name, setName] = useState("");
  const user = useSelector((state) => state.user.name);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(changeName(name));
  };

  return (
    <div>
      <p>User Name: {user}</p>
      <input type="text" onChange={(event) => setName(event.target.value)} />
      <button onClick={() => handleClick()}>Change</button>
    </div>
  );
};

export default UserCard;

import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((store) => store.user);

  return <>{user && <p className="text-bold">{user.firstName}Profile</p>}</>;
};

export default Profile
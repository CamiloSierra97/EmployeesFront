import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "../../store/slices/user.slice";
import FormLogin from "../login/FormLogin";
import UserInfo from "../user/UserInfo";

const Home = () => {
  const dispatch = useDispatch();
  const [isLogged, setIsLogged] = useState(false);
  const userInfo = useSelector((state) => state.user);

  const signOut = () => {
    localStorage.removeItem("token"), window.location.reload();
  };

  useEffect(() => {
    if (isLogged) {
      dispatch(getUserInfo());
    }
  }, []);

  return (
    <div className="home">
      <main className="home__container-card">
        {userInfo ? (
          <>
            <button
              style={{
                display: "flex",
                marginBottom: "1em",
                height: "2em",
                alignItems: "center",
              }}
              onClick={signOut}
            >
              Log out
            </button>
            <UserInfo />
          </>
        ) : (
          <FormLogin setIsLogged={setIsLogged} />
        )}
      </main>
    </div>
  );
};

export default Home;

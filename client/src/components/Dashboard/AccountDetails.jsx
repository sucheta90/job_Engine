/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
export default function AccountDetails(props) {
  const { userProfile } = props;
  const keys = Object.keys(userProfile);

  return (
    <div>
      <h1>Account Details</h1>
      <div className="d-flex align-content-center" style={{ height: "100vh" }}>
        <ul className="w-100">
          {keys.map((el) => {
            if (el === `password`) {
              return (
                <li className="d-flex" key={Math.random()}>
                  <h5>{el}</h5>: <p className="">*************</p>
                </li>
              );
            }
            if (el === `id`) {
              return (
                <li className="d-flex" key={Math.random()}>
                  {/* <h5>{el}</h5>: <p className="">*************</p> */}
                </li>
              );
            }
            return (
              <li className="d-flex" key={Math.random()}>
                <h5>{el}</h5>:
                <p className="ml-3" style={{ fontSize: "1.2em" }}>
                  {userProfile[el]}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

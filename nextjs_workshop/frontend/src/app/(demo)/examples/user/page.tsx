type User = { username: string; password: string };

// http://localhost:3000/examples/user
export default function Hey1() {
  // Implicit
  const tmp1 = 0;
  const tmp2 = "lek";
  const tmp3 = true;
  const tmp5 = { username: "admin", password: "1234" };

  // Explicit
  const tmp6: number = 0;
  const tmp7: string = "codemobiles";
  const tmp8: boolean = true;
  const tmp9: any = { username: "admin", password: "1234" };

  const tmp10: User = {
    username: "admin",
    password: "1234",
  };

  const method1 = () => {
    alert("Hey");
  };

  // JSX
  return (
    <div>
      <ul>
        <li>- {JSON.stringify(tmp5)}</li>
        <li>
          - <button onClick={() => method1()}>ClikeMe</button>
        </li>
      </ul>
    </div>
  );
}

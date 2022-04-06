import styles from "../styles/Home.module.scss";

export default function Home({ data }) {
  return (
    <div className={`${styles.home} container`}>
      {data.map((item) => (
        <div key={item.id} className="my-5 p-3 shadow rounded-3">
          <div className="d-flex justify-content-start align-items-center">
            <p className="fw-bold fs-2 me-2">{item.id}.</p>
            <p className="fw-bold fs-2 text-dark">{item.title}</p>
          </div>
          <p className="fw-bold fs-4 text-secondary">{item.body}</p>
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();
  console.log(data);
  return { props: { data } };
}

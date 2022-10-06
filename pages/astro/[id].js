import Head from "next/head";

export const getStaticPaths = async () => {
    const result = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const data = await result.json();

    const paths = data.map(rey =>{
        return{
            params: {id: rey.id.toString()}
        }
    })
  
    return {
      paths,
      fallback: false
    }
};
export const getStaticProps = async (context) => {
    const id = context.params.id;
    const result = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await result.json();
  
    return {
      props: {
        rey: data
      }
    };
  };

const Details = ({ rey }) => {
    console.log(rey);
  return (
      <div>
        <h1>{rey.name}</h1>
        <p>{rey.phone}</p>
        <p>{rey.email}</p>
        <p>{rey.username}</p>
        <p>{rey.website}</p>
        <p>{rey.address.city}</p>
      </div>
  );
};

export default Details;

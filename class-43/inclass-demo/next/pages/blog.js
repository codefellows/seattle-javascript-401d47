export async function getServerSideProps(context) {
  return {
    props: {blog: 'this is a blog'}, // will be passed to the page component as props
  }
}

// i fyou get this working, let me know!!
export default function Blog({blog}){
  return <p>{blog}</p>
}

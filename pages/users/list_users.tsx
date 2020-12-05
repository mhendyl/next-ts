import base_url_api from "../api/base_url"

function ListUsers({ listUserData }) {

  return (
    <ul>
      {listUserData.users.map((res, i) => (
        <li key={i}>{res.lastname}</li>
      ))}
    </ul>
  )

}

export async function getStaticProps() {
  const res = await fetch(base_url_api + '/users', {
    method: "GET",
  })
  const listUserData = await res.json()

  return {
    props: {
      listUserData,
    },
  }
}
export default ListUsers;
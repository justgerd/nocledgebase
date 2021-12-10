import "./Inspector.scss"

export function Inspector(props) {
  const elem = props.data.find(x => x.name == props.selection)
  return (
    <div class="inspector">
      <h3>{elem.name || <i>Detail...</i>} {<i>{elem.long || ""}</i>}</h3>
      <p>{elem.detail || ""}</p>
      <table>
        <tr>
          <td>Typ:</td>
          <td>{elem.type}</td>
        </tr>
        <tr>
          <td>Übergeordnet:</td>
          <td>{elem.parent}</td>
        </tr>
        <tr>
          <td>Verantwortlich:</td>
          <td>{elem.responsible}</td>
        </tr>
      </table>
    </div>
  )
}

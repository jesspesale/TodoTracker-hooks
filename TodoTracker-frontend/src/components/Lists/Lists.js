import { Link } from "react-router-dom"
import "./Lists.css"

export default function Lists({lists}) {

      return (
        <div>
            {Array.isArray(lists) && lists.map((list) => {
              return (
                <Link
                  className="list-title"
                  key={list.id}
                  to={`/lists/${list.id}`}
                >
                  <h2>{list.title}</h2>
                </Link>
              );
            })}
        </div>
      )
}

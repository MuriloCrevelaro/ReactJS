import "./mycomponent.css"

const MyComponent = (props) => {
    return(
        <div className="container">
            {props.children}
        </div>
    )
}

export default MyComponent
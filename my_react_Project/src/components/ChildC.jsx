import { StockContext } from '../App';



// Prop

// const ChildC = (props) => {
//     return (
//         <div>
//             <h1>Child C Component</h1>
//             <p>Name: {props.name} </p>
//             <p>Age: {props.age}</p>
//         </div>
//     );
// }       

// export default ChildC;

const ChildC = () => {
    return (
        <StockContext.Consumer>
            {(value) => (
                <>
                    <h1>Child C Component</h1>
                    <p>Name: {value.name}</p>
                    <p>Age: {value.age}</p>
                    <p>City: {value.city}</p>
                </>
            )}
        </StockContext.Consumer>
    );
}

export default ChildC;
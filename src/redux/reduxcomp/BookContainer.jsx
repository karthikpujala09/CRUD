import React from "react";
import { buyBook } from "../bookex/bookAction";
import { connect } from "react-redux";

const BookContainer = (props) => {
    return (
        <div>
            <h1>Number of books: {props.books}</h1>
            <button onClick={props.dispatchBooks}>Buy Book</button>

        </div>
    )
}

const mapStateToProps = state => {
    return {
        books : state.numOfBooks
    }
}

const mapDispatchToProps = dispatch => {
    return {
        dispatchBooks : () => dispatch(buyBook())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(BookContainer)

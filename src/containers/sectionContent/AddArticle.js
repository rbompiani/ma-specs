import React, { useState } from 'react'
// AWS imports
import { API, graphqlOperation } from 'aws-amplify'

// graphql imports
import { createArticle } from '../../graphql/mutations'


const AddArticle = (props) => {
    const [newArticle, setNewArticle] = useState({
        title: "",
        articlePartId: props.id,
        orderInPart: props.nextNumberInPart,
        isStandard: true,
        baseType: "article"
    })

    const articleInputHandler = (e) => {
        setNewArticle({
            ...newArticle,
            [e.target.name]: e.target.value
        });
    }

    const submitArticleHandler = async (e) => {
        e.preventDefault();
        console.log("Adding this to the database:", newArticle)
        await API.graphql(graphqlOperation(createArticle, { input: newArticle }))
    }

    return (
        <div className="article">
            <input type="text" name="title" value={newArticle.title} onChange={articleInputHandler} />
            <button onClick={submitArticleHandler}>+</button>
        </div>
    )
}

export default AddArticle
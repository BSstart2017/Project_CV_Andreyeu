import React from 'react'
import {render} from "@testing-library/react"
import {Provider} from "react-redux"
import {createMemoryHistory} from "history";
import {Router, useParams, withRouter} from "react-router-dom";
import store from "../../redux/store";



export const renderWithRedux = (component) => {
    return {
        ...render(<Provider store={store}>{component}</Provider>), store
}
}

export const routerWithRedux = (component) => {
    const history = createMemoryHistory()
    return render(<Router history={history}>{component}</Router>)
}


//todo: HOC router
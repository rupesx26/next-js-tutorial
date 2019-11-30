import fetch from 'isomorphic-unfetch'


const App = () => {
    return <h1>H?ello Next</h1>
}

App.getInitialProps = async context => {

    //fetch initial timeline
    const response = await fetch (`http://localhost:3000/api/timeline`)

    if(response.ok) {
        console.log(await response.text())
    }

    return {}
}

export default App
import React, { Component } from 'react';
import axios from 'axios'


class Index extends Component {

    state = {
        creatures: []
    }

    componentDidMount() {
        this.getCreatures()
    }


    getCreatures = async () => {
        const res = await axios.get('/api/creatures')
        const creatures = res.data
        this.setState({ creatures })
    }

    render() {
        return (
            <div>
                {
                    this.state.creatures.map((creature, i) => {
                        return (
                            <div>
                                <h1>{creature.name}</h1>
                                <p>{creature.description}</p>
                            </div>
                        )
                    }

                    )
                }
            </div>
        );
    }
}

export default Index;
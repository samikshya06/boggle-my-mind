import React, { Component } from 'react'

export default class Begin extends Component {
    render({match}) {
        return (
            <div>
                Hello {match.params.username}
            </div>
        )
    }
}

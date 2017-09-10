import React, { Component } from 'react'
import Link from './Link'
import {
  createFragmentContainer,
  graphql
} from 'react-relay'

class LinkList extends Component {
  render() {
    return (
      <div>
        <div>
          {this.props.viewer.allLinks.edges.map(({node}, index) => (
            <Link key={node.__id} index={index} link={node}/>
          ))}
        </div>
        <div className='flex ml4 mv3 gray'>
          <div className='pointer' onClick={() => this._loadMore()}>More</div>
        </div>
      </div>
    )
  }
}

export default createFragmentContainer(LinkList, graphql`
  fragment LinkList_viewer on Viewer {
    allLinks(last: 100, orderBy: createdAt_DESC) @connection(key: "LinkList_allLinks", filters: []) {
      edges {
        node {
          ...Link_link
        }
      }
    }
  }
`)

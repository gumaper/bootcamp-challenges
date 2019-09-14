import React, { Component } from 'react';

import PostItem from './PostItem';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Lorem Ipsum',
          avatar: 'https://i.pravatar.cc/150?img=1'
        },
        date: '14 Set 2019',
        content: 'Lorem ipsum dolor sit amet',
        comments: [
          {
            id: 2,
            author: {
              name: 'Lorem Ipsum',
              avatar: 'https://avatars2.githubusercontent.com/u/2254731?v=4'
            },
            date: '14 Set 2019',
            content:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed erat lobortis, rhoncus metus quis, imperdiet erat. Mauris sollicitudin neque a imperdiet molestie. In feugiat turpis at ultrices rhoncus. Nam congue efficitur porta. Class aptent taciti sociosqu ad litora torquent per conubia nostra'
          }
        ]
      },
      {
        id: 3,
        author: {
          name: 'John Doe',
          avatar: 'https://i.pravatar.cc/150?img=8'
        },
        date: '14 Set 2019',
        content:
          'per inceptos himenaeos. Aenean molestie fringilla diam, ac lacinia magna scelerisque eget. Nunc elementum auctor congue. Quisque eu est non eros scelerisque dapibus.',
        comments: [
          {
            id: 4,
            author: {
              name: 'Alice Walton',
              avatar: 'https://i.pravatar.cc/150?img=5'
            },
            date: '14 Set 2019',
            content:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed erat lobortis, rhoncus metus quis, imperdiet erat. Mauris sollicitudin neque a imperdiet molestie. In feugiat turpis at ultrices rhoncus. Nam congue efficitur porta. Class aptent taciti sociosqu ad litora torquent per conubia nostra'
          },
          {
            id: 5,
            author: {
              name: 'Ellon Musk',
              avatar: 'https://i.pravatar.cc/150?img=11'
            },
            date: '14 Set 2019',
            content:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed erat lobortis, rhoncus metus quis, imperdiet erat. Mauris sollicitudin neque a imperdiet molestie. In feugiat turpis at ultrices rhoncus. Nam congue efficitur porta. Class aptent taciti sociosqu ad litora torquent per conubia nostra'
          }
        ]
      }
    ]
  };

  render() {
    const { posts } = this.state;

    return (
      <div className="postlist">
        {posts.map(post => (
          <PostItem key={post.id} {...post} />
        ))}
      </div>
    );
  }
}

export default PostList;

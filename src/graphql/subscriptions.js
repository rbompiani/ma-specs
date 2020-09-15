/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBlog = /* GraphQL */ `
  subscription OnCreateBlog {
    onCreateBlog {
      id
      name
      posts {
        items {
          id
          title
          blogID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateBlog = /* GraphQL */ `
  subscription OnUpdateBlog {
    onUpdateBlog {
      id
      name
      posts {
        items {
          id
          title
          blogID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteBlog = /* GraphQL */ `
  subscription OnDeleteBlog {
    onDeleteBlog {
      id
      name
      posts {
        items {
          id
          title
          blogID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
      id
      title
      blogID
      blog {
        id
        name
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      comments {
        items {
          id
          postID
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
      id
      title
      blogID
      blog {
        id
        name
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      comments {
        items {
          id
          postID
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
      id
      title
      blogID
      blog {
        id
        name
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      comments {
        items {
          id
          postID
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
      id
      postID
      post {
        id
        title
        blogID
        blog {
          id
          name
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      content
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
      id
      postID
      post {
        id
        title
        blogID
        blog {
          id
          name
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      content
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
      id
      postID
      post {
        id
        title
        blogID
        blog {
          id
          name
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      content
      createdAt
      updatedAt
    }
  }
`;
export const onCreateDivision = /* GraphQL */ `
  subscription OnCreateDivision {
    onCreateDivision {
      id
      title
      isOn
      sections {
        items {
          id
          title
          isOn
          divisionID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateDivision = /* GraphQL */ `
  subscription OnUpdateDivision {
    onUpdateDivision {
      id
      title
      isOn
      sections {
        items {
          id
          title
          isOn
          divisionID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteDivision = /* GraphQL */ `
  subscription OnDeleteDivision {
    onDeleteDivision {
      id
      title
      isOn
      sections {
        items {
          id
          title
          isOn
          divisionID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateSection = /* GraphQL */ `
  subscription OnCreateSection {
    onCreateSection {
      id
      title
      isOn
      divisionID
      division {
        id
        title
        isOn
        sections {
          nextToken
        }
        createdAt
        updatedAt
      }
      parts {
        items {
          id
          title
          isOn
          sectionID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSection = /* GraphQL */ `
  subscription OnUpdateSection {
    onUpdateSection {
      id
      title
      isOn
      divisionID
      division {
        id
        title
        isOn
        sections {
          nextToken
        }
        createdAt
        updatedAt
      }
      parts {
        items {
          id
          title
          isOn
          sectionID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSection = /* GraphQL */ `
  subscription OnDeleteSection {
    onDeleteSection {
      id
      title
      isOn
      divisionID
      division {
        id
        title
        isOn
        sections {
          nextToken
        }
        createdAt
        updatedAt
      }
      parts {
        items {
          id
          title
          isOn
          sectionID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePart = /* GraphQL */ `
  subscription OnCreatePart {
    onCreatePart {
      id
      title
      isOn
      sectionID
      section {
        id
        title
        isOn
        divisionID
        division {
          id
          title
          isOn
          createdAt
          updatedAt
        }
        parts {
          nextToken
        }
        createdAt
        updatedAt
      }
      subPart {
        items {
          id
          title
          isOn
          partID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePart = /* GraphQL */ `
  subscription OnUpdatePart {
    onUpdatePart {
      id
      title
      isOn
      sectionID
      section {
        id
        title
        isOn
        divisionID
        division {
          id
          title
          isOn
          createdAt
          updatedAt
        }
        parts {
          nextToken
        }
        createdAt
        updatedAt
      }
      subPart {
        items {
          id
          title
          isOn
          partID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePart = /* GraphQL */ `
  subscription OnDeletePart {
    onDeletePart {
      id
      title
      isOn
      sectionID
      section {
        id
        title
        isOn
        divisionID
        division {
          id
          title
          isOn
          createdAt
          updatedAt
        }
        parts {
          nextToken
        }
        createdAt
        updatedAt
      }
      subPart {
        items {
          id
          title
          isOn
          partID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateSubPart = /* GraphQL */ `
  subscription OnCreateSubPart {
    onCreateSubPart {
      id
      title
      isOn
      partID
      part {
        id
        title
        isOn
        sectionID
        section {
          id
          title
          isOn
          divisionID
          createdAt
          updatedAt
        }
        subPart {
          nextToken
        }
        createdAt
        updatedAt
      }
      items {
        items {
          id
          partID
          content
          tier
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSubPart = /* GraphQL */ `
  subscription OnUpdateSubPart {
    onUpdateSubPart {
      id
      title
      isOn
      partID
      part {
        id
        title
        isOn
        sectionID
        section {
          id
          title
          isOn
          divisionID
          createdAt
          updatedAt
        }
        subPart {
          nextToken
        }
        createdAt
        updatedAt
      }
      items {
        items {
          id
          partID
          content
          tier
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSubPart = /* GraphQL */ `
  subscription OnDeleteSubPart {
    onDeleteSubPart {
      id
      title
      isOn
      partID
      part {
        id
        title
        isOn
        sectionID
        section {
          id
          title
          isOn
          divisionID
          createdAt
          updatedAt
        }
        subPart {
          nextToken
        }
        createdAt
        updatedAt
      }
      items {
        items {
          id
          partID
          content
          tier
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateItem = /* GraphQL */ `
  subscription OnCreateItem {
    onCreateItem {
      id
      partID
      part {
        id
        title
        isOn
        partID
        part {
          id
          title
          isOn
          sectionID
          createdAt
          updatedAt
        }
        items {
          nextToken
        }
        createdAt
        updatedAt
      }
      content
      tier
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateItem = /* GraphQL */ `
  subscription OnUpdateItem {
    onUpdateItem {
      id
      partID
      part {
        id
        title
        isOn
        partID
        part {
          id
          title
          isOn
          sectionID
          createdAt
          updatedAt
        }
        items {
          nextToken
        }
        createdAt
        updatedAt
      }
      content
      tier
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteItem = /* GraphQL */ `
  subscription OnDeleteItem {
    onDeleteItem {
      id
      partID
      part {
        id
        title
        isOn
        partID
        part {
          id
          title
          isOn
          sectionID
          createdAt
          updatedAt
        }
        items {
          nextToken
        }
        createdAt
        updatedAt
      }
      content
      tier
      createdAt
      updatedAt
    }
  }
`;

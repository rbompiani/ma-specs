/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBlog = /* GraphQL */ `
  mutation CreateBlog(
    $input: CreateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    createBlog(input: $input, condition: $condition) {
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
export const updateBlog = /* GraphQL */ `
  mutation UpdateBlog(
    $input: UpdateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    updateBlog(input: $input, condition: $condition) {
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
export const deleteBlog = /* GraphQL */ `
  mutation DeleteBlog(
    $input: DeleteBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    deleteBlog(input: $input, condition: $condition) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
export const createDivision = /* GraphQL */ `
  mutation CreateDivision(
    $input: CreateDivisionInput!
    $condition: ModelDivisionConditionInput
  ) {
    createDivision(input: $input, condition: $condition) {
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
export const updateDivision = /* GraphQL */ `
  mutation UpdateDivision(
    $input: UpdateDivisionInput!
    $condition: ModelDivisionConditionInput
  ) {
    updateDivision(input: $input, condition: $condition) {
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
export const deleteDivision = /* GraphQL */ `
  mutation DeleteDivision(
    $input: DeleteDivisionInput!
    $condition: ModelDivisionConditionInput
  ) {
    deleteDivision(input: $input, condition: $condition) {
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
export const createSection = /* GraphQL */ `
  mutation CreateSection(
    $input: CreateSectionInput!
    $condition: ModelSectionConditionInput
  ) {
    createSection(input: $input, condition: $condition) {
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
export const updateSection = /* GraphQL */ `
  mutation UpdateSection(
    $input: UpdateSectionInput!
    $condition: ModelSectionConditionInput
  ) {
    updateSection(input: $input, condition: $condition) {
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
export const deleteSection = /* GraphQL */ `
  mutation DeleteSection(
    $input: DeleteSectionInput!
    $condition: ModelSectionConditionInput
  ) {
    deleteSection(input: $input, condition: $condition) {
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
export const createPart = /* GraphQL */ `
  mutation CreatePart(
    $input: CreatePartInput!
    $condition: ModelPartConditionInput
  ) {
    createPart(input: $input, condition: $condition) {
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
export const updatePart = /* GraphQL */ `
  mutation UpdatePart(
    $input: UpdatePartInput!
    $condition: ModelPartConditionInput
  ) {
    updatePart(input: $input, condition: $condition) {
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
export const deletePart = /* GraphQL */ `
  mutation DeletePart(
    $input: DeletePartInput!
    $condition: ModelPartConditionInput
  ) {
    deletePart(input: $input, condition: $condition) {
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
export const createSubPart = /* GraphQL */ `
  mutation CreateSubPart(
    $input: CreateSubPartInput!
    $condition: ModelSubPartConditionInput
  ) {
    createSubPart(input: $input, condition: $condition) {
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
export const updateSubPart = /* GraphQL */ `
  mutation UpdateSubPart(
    $input: UpdateSubPartInput!
    $condition: ModelSubPartConditionInput
  ) {
    updateSubPart(input: $input, condition: $condition) {
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
export const deleteSubPart = /* GraphQL */ `
  mutation DeleteSubPart(
    $input: DeleteSubPartInput!
    $condition: ModelSubPartConditionInput
  ) {
    deleteSubPart(input: $input, condition: $condition) {
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
export const createItem = /* GraphQL */ `
  mutation CreateItem(
    $input: CreateItemInput!
    $condition: ModelItemConditionInput
  ) {
    createItem(input: $input, condition: $condition) {
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
export const updateItem = /* GraphQL */ `
  mutation UpdateItem(
    $input: UpdateItemInput!
    $condition: ModelItemConditionInput
  ) {
    updateItem(input: $input, condition: $condition) {
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
export const deleteItem = /* GraphQL */ `
  mutation DeleteItem(
    $input: DeleteItemInput!
    $condition: ModelItemConditionInput
  ) {
    deleteItem(input: $input, condition: $condition) {
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

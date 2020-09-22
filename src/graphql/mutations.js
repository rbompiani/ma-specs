/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProject = /* GraphQL */ `
  mutation CreateProject(
    $input: CreateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    createProject(input: $input, condition: $condition) {
      id
      title
      divisionsOn {
        items {
          id
          title
          createdAt
          updatedAt
        }
        nextToken
      }
      sectionsOn {
        items {
          id
          title
          createdAt
          updatedAt
        }
        nextToken
      }
      paragraphsOn {
        items {
          id
          title
          isStandard
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
export const updateProject = /* GraphQL */ `
  mutation UpdateProject(
    $input: UpdateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    updateProject(input: $input, condition: $condition) {
      id
      title
      divisionsOn {
        items {
          id
          title
          createdAt
          updatedAt
        }
        nextToken
      }
      sectionsOn {
        items {
          id
          title
          createdAt
          updatedAt
        }
        nextToken
      }
      paragraphsOn {
        items {
          id
          title
          isStandard
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
export const deleteProject = /* GraphQL */ `
  mutation DeleteProject(
    $input: DeleteProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    deleteProject(input: $input, condition: $condition) {
      id
      title
      divisionsOn {
        items {
          id
          title
          createdAt
          updatedAt
        }
        nextToken
      }
      sectionsOn {
        items {
          id
          title
          createdAt
          updatedAt
        }
        nextToken
      }
      paragraphsOn {
        items {
          id
          title
          isStandard
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
export const createDivision = /* GraphQL */ `
  mutation CreateDivision(
    $input: CreateDivisionInput!
    $condition: ModelDivisionConditionInput
  ) {
    createDivision(input: $input, condition: $condition) {
      id
      title
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
      createdAt
      updatedAt
    }
  }
`;
export const createParagraph = /* GraphQL */ `
  mutation CreateParagraph(
    $input: CreateParagraphInput!
    $condition: ModelParagraphConditionInput
  ) {
    createParagraph(input: $input, condition: $condition) {
      id
      part {
        id
        title
        createdAt
        updatedAt
      }
      title
      isStandard
      createdAt
      updatedAt
    }
  }
`;
export const updateParagraph = /* GraphQL */ `
  mutation UpdateParagraph(
    $input: UpdateParagraphInput!
    $condition: ModelParagraphConditionInput
  ) {
    updateParagraph(input: $input, condition: $condition) {
      id
      part {
        id
        title
        createdAt
        updatedAt
      }
      title
      isStandard
      createdAt
      updatedAt
    }
  }
`;
export const deleteParagraph = /* GraphQL */ `
  mutation DeleteParagraph(
    $input: DeleteParagraphInput!
    $condition: ModelParagraphConditionInput
  ) {
    deleteParagraph(input: $input, condition: $condition) {
      id
      part {
        id
        title
        createdAt
        updatedAt
      }
      title
      isStandard
      createdAt
      updatedAt
    }
  }
`;

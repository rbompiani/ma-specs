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
      divisionsOn
      sectionsOn
      paragraphsOn
      content {
        items {
          id
          orderInParagraph
          listTier
          content
          isOn
          createdAt
          updatedAt
        }
        nextToken
      }
      baseType
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
      divisionsOn
      sectionsOn
      paragraphsOn
      content {
        items {
          id
          orderInParagraph
          listTier
          content
          isOn
          createdAt
          updatedAt
        }
        nextToken
      }
      baseType
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
      divisionsOn
      sectionsOn
      paragraphsOn
      content {
        items {
          id
          orderInParagraph
          listTier
          content
          isOn
          createdAt
          updatedAt
        }
        nextToken
      }
      baseType
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
      sections {
        items {
          id
          title
          baseType
          createdAt
          updatedAt
        }
        nextToken
      }
      baseType
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
      sections {
        items {
          id
          title
          baseType
          createdAt
          updatedAt
        }
        nextToken
      }
      baseType
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
      sections {
        items {
          id
          title
          baseType
          createdAt
          updatedAt
        }
        nextToken
      }
      baseType
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
      division {
        id
        title
        sections {
          nextToken
        }
        baseType
        createdAt
        updatedAt
      }
      baseType
      parts {
        items {
          id
          title
          baseType
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
      division {
        id
        title
        sections {
          nextToken
        }
        baseType
        createdAt
        updatedAt
      }
      baseType
      parts {
        items {
          id
          title
          baseType
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
      division {
        id
        title
        sections {
          nextToken
        }
        baseType
        createdAt
        updatedAt
      }
      baseType
      parts {
        items {
          id
          title
          baseType
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
      paragraphs {
        items {
          id
          title
          isStandard
          baseType
          createdAt
          updatedAt
        }
        nextToken
      }
      baseType
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
      paragraphs {
        items {
          id
          title
          isStandard
          baseType
          createdAt
          updatedAt
        }
        nextToken
      }
      baseType
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
      paragraphs {
        items {
          id
          title
          isStandard
          baseType
          createdAt
          updatedAt
        }
        nextToken
      }
      baseType
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
      title
      part {
        id
        title
        paragraphs {
          nextToken
        }
        baseType
        createdAt
        updatedAt
      }
      isStandard
      baseType
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
      title
      part {
        id
        title
        paragraphs {
          nextToken
        }
        baseType
        createdAt
        updatedAt
      }
      isStandard
      baseType
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
      title
      part {
        id
        title
        paragraphs {
          nextToken
        }
        baseType
        createdAt
        updatedAt
      }
      isStandard
      baseType
      createdAt
      updatedAt
    }
  }
`;
export const createSubparagraph = /* GraphQL */ `
  mutation CreateSubparagraph(
    $input: CreateSubparagraphInput!
    $condition: ModelSubparagraphConditionInput
  ) {
    createSubparagraph(input: $input, condition: $condition) {
      id
      project {
        id
        title
        divisionsOn
        sectionsOn
        paragraphsOn
        content {
          nextToken
        }
        baseType
        createdAt
        updatedAt
      }
      section {
        id
        title
        division {
          id
          title
          baseType
          createdAt
          updatedAt
        }
        baseType
        parts {
          nextToken
        }
        createdAt
        updatedAt
      }
      paragraph {
        id
        title
        part {
          id
          title
          baseType
          createdAt
          updatedAt
        }
        isStandard
        baseType
        createdAt
        updatedAt
      }
      orderInParagraph
      listTier
      content
      isOn
      createdAt
      updatedAt
    }
  }
`;
export const updateSubparagraph = /* GraphQL */ `
  mutation UpdateSubparagraph(
    $input: UpdateSubparagraphInput!
    $condition: ModelSubparagraphConditionInput
  ) {
    updateSubparagraph(input: $input, condition: $condition) {
      id
      project {
        id
        title
        divisionsOn
        sectionsOn
        paragraphsOn
        content {
          nextToken
        }
        baseType
        createdAt
        updatedAt
      }
      section {
        id
        title
        division {
          id
          title
          baseType
          createdAt
          updatedAt
        }
        baseType
        parts {
          nextToken
        }
        createdAt
        updatedAt
      }
      paragraph {
        id
        title
        part {
          id
          title
          baseType
          createdAt
          updatedAt
        }
        isStandard
        baseType
        createdAt
        updatedAt
      }
      orderInParagraph
      listTier
      content
      isOn
      createdAt
      updatedAt
    }
  }
`;
export const deleteSubparagraph = /* GraphQL */ `
  mutation DeleteSubparagraph(
    $input: DeleteSubparagraphInput!
    $condition: ModelSubparagraphConditionInput
  ) {
    deleteSubparagraph(input: $input, condition: $condition) {
      id
      project {
        id
        title
        divisionsOn
        sectionsOn
        paragraphsOn
        content {
          nextToken
        }
        baseType
        createdAt
        updatedAt
      }
      section {
        id
        title
        division {
          id
          title
          baseType
          createdAt
          updatedAt
        }
        baseType
        parts {
          nextToken
        }
        createdAt
        updatedAt
      }
      paragraph {
        id
        title
        part {
          id
          title
          baseType
          createdAt
          updatedAt
        }
        isStandard
        baseType
        createdAt
        updatedAt
      }
      orderInParagraph
      listTier
      content
      isOn
      createdAt
      updatedAt
    }
  }
`;

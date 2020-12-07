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
      sectionsOn
      content {
        items {
          id
          partsOn
          articlesOn
          notes
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
      sectionsOn
      content {
        items {
          id
          partsOn
          articlesOn
          notes
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
      sectionsOn
      content {
        items {
          id
          partsOn
          articlesOn
          notes
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
      articles {
        items {
          id
          title
          orderInPart
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
      articles {
        items {
          id
          title
          orderInPart
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
      articles {
        items {
          id
          title
          orderInPart
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
export const createArticle = /* GraphQL */ `
  mutation CreateArticle(
    $input: CreateArticleInput!
    $condition: ModelArticleConditionInput
  ) {
    createArticle(input: $input, condition: $condition) {
      id
      title
      part {
        id
        title
        articles {
          nextToken
        }
        baseType
        createdAt
        updatedAt
      }
      orderInPart
      isStandard
      baseType
      paragraphHints {
        items {
          id
          orderInArticle
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
export const updateArticle = /* GraphQL */ `
  mutation UpdateArticle(
    $input: UpdateArticleInput!
    $condition: ModelArticleConditionInput
  ) {
    updateArticle(input: $input, condition: $condition) {
      id
      title
      part {
        id
        title
        articles {
          nextToken
        }
        baseType
        createdAt
        updatedAt
      }
      orderInPart
      isStandard
      baseType
      paragraphHints {
        items {
          id
          orderInArticle
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
export const deleteArticle = /* GraphQL */ `
  mutation DeleteArticle(
    $input: DeleteArticleInput!
    $condition: ModelArticleConditionInput
  ) {
    deleteArticle(input: $input, condition: $condition) {
      id
      title
      part {
        id
        title
        articles {
          nextToken
        }
        baseType
        createdAt
        updatedAt
      }
      orderInPart
      isStandard
      baseType
      paragraphHints {
        items {
          id
          orderInArticle
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
export const createParagraphHint = /* GraphQL */ `
  mutation CreateParagraphHint(
    $input: CreateParagraphHintInput!
    $condition: ModelParagraphHintConditionInput
  ) {
    createParagraphHint(input: $input, condition: $condition) {
      id
      article {
        id
        title
        part {
          id
          title
          baseType
          createdAt
          updatedAt
        }
        orderInPart
        isStandard
        baseType
        paragraphHints {
          nextToken
        }
        createdAt
        updatedAt
      }
      orderInArticle
      content
      createdAt
      updatedAt
    }
  }
`;
export const updateParagraphHint = /* GraphQL */ `
  mutation UpdateParagraphHint(
    $input: UpdateParagraphHintInput!
    $condition: ModelParagraphHintConditionInput
  ) {
    updateParagraphHint(input: $input, condition: $condition) {
      id
      article {
        id
        title
        part {
          id
          title
          baseType
          createdAt
          updatedAt
        }
        orderInPart
        isStandard
        baseType
        paragraphHints {
          nextToken
        }
        createdAt
        updatedAt
      }
      orderInArticle
      content
      createdAt
      updatedAt
    }
  }
`;
export const deleteParagraphHint = /* GraphQL */ `
  mutation DeleteParagraphHint(
    $input: DeleteParagraphHintInput!
    $condition: ModelParagraphHintConditionInput
  ) {
    deleteParagraphHint(input: $input, condition: $condition) {
      id
      article {
        id
        title
        part {
          id
          title
          baseType
          createdAt
          updatedAt
        }
        orderInPart
        isStandard
        baseType
        paragraphHints {
          nextToken
        }
        createdAt
        updatedAt
      }
      orderInArticle
      content
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
      section {
        id
        project {
          id
          title
          sectionsOn
          baseType
          createdAt
          updatedAt
        }
        section {
          id
          title
          baseType
          createdAt
          updatedAt
        }
        partsOn
        articlesOn
        paragraphs {
          nextToken
        }
        notes
        createdAt
        updatedAt
      }
      article
      orderInArticle
      content
      isOn
      subparagraphs {
        items {
          id
          orderInParagraph
          content
          isOn
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
export const updateParagraph = /* GraphQL */ `
  mutation UpdateParagraph(
    $input: UpdateParagraphInput!
    $condition: ModelParagraphConditionInput
  ) {
    updateParagraph(input: $input, condition: $condition) {
      id
      section {
        id
        project {
          id
          title
          sectionsOn
          baseType
          createdAt
          updatedAt
        }
        section {
          id
          title
          baseType
          createdAt
          updatedAt
        }
        partsOn
        articlesOn
        paragraphs {
          nextToken
        }
        notes
        createdAt
        updatedAt
      }
      article
      orderInArticle
      content
      isOn
      subparagraphs {
        items {
          id
          orderInParagraph
          content
          isOn
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
export const deleteParagraph = /* GraphQL */ `
  mutation DeleteParagraph(
    $input: DeleteParagraphInput!
    $condition: ModelParagraphConditionInput
  ) {
    deleteParagraph(input: $input, condition: $condition) {
      id
      section {
        id
        project {
          id
          title
          sectionsOn
          baseType
          createdAt
          updatedAt
        }
        section {
          id
          title
          baseType
          createdAt
          updatedAt
        }
        partsOn
        articlesOn
        paragraphs {
          nextToken
        }
        notes
        createdAt
        updatedAt
      }
      article
      orderInArticle
      content
      isOn
      subparagraphs {
        items {
          id
          orderInParagraph
          content
          isOn
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
export const createSubParagraph = /* GraphQL */ `
  mutation CreateSubParagraph(
    $input: CreateSubParagraphInput!
    $condition: ModelSubParagraphConditionInput
  ) {
    createSubParagraph(input: $input, condition: $condition) {
      id
      paragraph {
        id
        section {
          id
          partsOn
          articlesOn
          notes
          createdAt
          updatedAt
        }
        article
        orderInArticle
        content
        isOn
        subparagraphs {
          nextToken
        }
        baseType
        createdAt
        updatedAt
      }
      orderInParagraph
      content
      isOn
      baseType
      createdAt
      updatedAt
    }
  }
`;
export const updateSubParagraph = /* GraphQL */ `
  mutation UpdateSubParagraph(
    $input: UpdateSubParagraphInput!
    $condition: ModelSubParagraphConditionInput
  ) {
    updateSubParagraph(input: $input, condition: $condition) {
      id
      paragraph {
        id
        section {
          id
          partsOn
          articlesOn
          notes
          createdAt
          updatedAt
        }
        article
        orderInArticle
        content
        isOn
        subparagraphs {
          nextToken
        }
        baseType
        createdAt
        updatedAt
      }
      orderInParagraph
      content
      isOn
      baseType
      createdAt
      updatedAt
    }
  }
`;
export const deleteSubParagraph = /* GraphQL */ `
  mutation DeleteSubParagraph(
    $input: DeleteSubParagraphInput!
    $condition: ModelSubParagraphConditionInput
  ) {
    deleteSubParagraph(input: $input, condition: $condition) {
      id
      paragraph {
        id
        section {
          id
          partsOn
          articlesOn
          notes
          createdAt
          updatedAt
        }
        article
        orderInArticle
        content
        isOn
        subparagraphs {
          nextToken
        }
        baseType
        createdAt
        updatedAt
      }
      orderInParagraph
      content
      isOn
      baseType
      createdAt
      updatedAt
    }
  }
`;
export const createSectionContent = /* GraphQL */ `
  mutation CreateSectionContent(
    $input: CreateSectionContentInput!
    $condition: ModelSectionContentConditionInput
  ) {
    createSectionContent(input: $input, condition: $condition) {
      id
      project {
        id
        title
        sectionsOn
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
      partsOn
      articlesOn
      paragraphs {
        items {
          id
          article
          orderInArticle
          content
          isOn
          baseType
          createdAt
          updatedAt
        }
        nextToken
      }
      notes
      createdAt
      updatedAt
    }
  }
`;
export const updateSectionContent = /* GraphQL */ `
  mutation UpdateSectionContent(
    $input: UpdateSectionContentInput!
    $condition: ModelSectionContentConditionInput
  ) {
    updateSectionContent(input: $input, condition: $condition) {
      id
      project {
        id
        title
        sectionsOn
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
      partsOn
      articlesOn
      paragraphs {
        items {
          id
          article
          orderInArticle
          content
          isOn
          baseType
          createdAt
          updatedAt
        }
        nextToken
      }
      notes
      createdAt
      updatedAt
    }
  }
`;
export const deleteSectionContent = /* GraphQL */ `
  mutation DeleteSectionContent(
    $input: DeleteSectionContentInput!
    $condition: ModelSectionContentConditionInput
  ) {
    deleteSectionContent(input: $input, condition: $condition) {
      id
      project {
        id
        title
        sectionsOn
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
      partsOn
      articlesOn
      paragraphs {
        items {
          id
          article
          orderInArticle
          content
          isOn
          baseType
          createdAt
          updatedAt
        }
        nextToken
      }
      notes
      createdAt
      updatedAt
    }
  }
`;

/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProject = /* GraphQL */ `
  subscription OnCreateProject {
    onCreateProject {
      id
      title
      sectionsOn
      content {
        items {
          id
          orderInArticle
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
export const onUpdateProject = /* GraphQL */ `
  subscription OnUpdateProject {
    onUpdateProject {
      id
      title
      sectionsOn
      content {
        items {
          id
          orderInArticle
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
export const onDeleteProject = /* GraphQL */ `
  subscription OnDeleteProject {
    onDeleteProject {
      id
      title
      sectionsOn
      content {
        items {
          id
          orderInArticle
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
export const onCreateDivision = /* GraphQL */ `
  subscription OnCreateDivision {
    onCreateDivision {
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
export const onUpdateDivision = /* GraphQL */ `
  subscription OnUpdateDivision {
    onUpdateDivision {
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
export const onDeleteDivision = /* GraphQL */ `
  subscription OnDeleteDivision {
    onDeleteDivision {
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
export const onCreateSection = /* GraphQL */ `
  subscription OnCreateSection {
    onCreateSection {
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
export const onUpdateSection = /* GraphQL */ `
  subscription OnUpdateSection {
    onUpdateSection {
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
export const onDeleteSection = /* GraphQL */ `
  subscription OnDeleteSection {
    onDeleteSection {
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
export const onCreatePart = /* GraphQL */ `
  subscription OnCreatePart {
    onCreatePart {
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
export const onUpdatePart = /* GraphQL */ `
  subscription OnUpdatePart {
    onUpdatePart {
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
export const onDeletePart = /* GraphQL */ `
  subscription OnDeletePart {
    onDeletePart {
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
export const onCreateArticle = /* GraphQL */ `
  subscription OnCreateArticle {
    onCreateArticle {
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
          isOn
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
export const onUpdateArticle = /* GraphQL */ `
  subscription OnUpdateArticle {
    onUpdateArticle {
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
          isOn
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
export const onDeleteArticle = /* GraphQL */ `
  subscription OnDeleteArticle {
    onDeleteArticle {
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
          isOn
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
export const onCreateParagraph = /* GraphQL */ `
  subscription OnCreateParagraph {
    onCreateParagraph {
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
      listTier
      content
      isOn
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateParagraph = /* GraphQL */ `
  subscription OnUpdateParagraph {
    onUpdateParagraph {
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
      listTier
      content
      isOn
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteParagraph = /* GraphQL */ `
  subscription OnDeleteParagraph {
    onDeleteParagraph {
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
      listTier
      content
      isOn
      createdAt
      updatedAt
    }
  }
`;
export const onCreateParagraphHint = /* GraphQL */ `
  subscription OnCreateParagraphHint {
    onCreateParagraphHint {
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
      isOn
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateParagraphHint = /* GraphQL */ `
  subscription OnUpdateParagraphHint {
    onUpdateParagraphHint {
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
      isOn
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteParagraphHint = /* GraphQL */ `
  subscription OnDeleteParagraphHint {
    onDeleteParagraphHint {
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
      isOn
      createdAt
      updatedAt
    }
  }
`;
export const onCreateSectionContent = /* GraphQL */ `
  subscription OnCreateSectionContent {
    onCreateSectionContent {
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
      paragraphsOn
      notes
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSectionContent = /* GraphQL */ `
  subscription OnUpdateSectionContent {
    onUpdateSectionContent {
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
      paragraphsOn
      notes
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSectionContent = /* GraphQL */ `
  subscription OnDeleteSectionContent {
    onDeleteSectionContent {
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
      paragraphsOn
      notes
      createdAt
      updatedAt
    }
  }
`;

/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProject = /* GraphQL */ `
  subscription OnCreateProject {
    onCreateProject {
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
export const onUpdateProject = /* GraphQL */ `
  subscription OnUpdateProject {
    onUpdateProject {
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
export const onDeleteProject = /* GraphQL */ `
  subscription OnDeleteProject {
    onDeleteProject {
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
export const onUpdatePart = /* GraphQL */ `
  subscription OnUpdatePart {
    onUpdatePart {
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
export const onDeletePart = /* GraphQL */ `
  subscription OnDeletePart {
    onDeletePart {
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
export const onCreateParagraph = /* GraphQL */ `
  subscription OnCreateParagraph {
    onCreateParagraph {
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
export const onUpdateParagraph = /* GraphQL */ `
  subscription OnUpdateParagraph {
    onUpdateParagraph {
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
export const onDeleteParagraph = /* GraphQL */ `
  subscription OnDeleteParagraph {
    onDeleteParagraph {
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
export const onCreateSubparagraph = /* GraphQL */ `
  subscription OnCreateSubparagraph {
    onCreateSubparagraph {
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
export const onUpdateSubparagraph = /* GraphQL */ `
  subscription OnUpdateSubparagraph {
    onUpdateSubparagraph {
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
export const onDeleteSubparagraph = /* GraphQL */ `
  subscription OnDeleteSubparagraph {
    onDeleteSubparagraph {
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

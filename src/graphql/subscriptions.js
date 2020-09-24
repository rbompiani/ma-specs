/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProject = /* GraphQL */ `
  subscription OnCreateProject {
    onCreateProject {
      id
      title
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
      createdAt
      updatedAt
    }
  }
`;

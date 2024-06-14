import type { Schema, Attribute } from '@strapi/strapi';

export interface AboutAbout extends Schema.Component {
  collectionName: 'components_about_abouts';
  info: {
    displayName: 'aboutMe';
    description: '';
  };
  attributes: {
    content: Attribute.Blocks;
  };
}

export interface ContactContact extends Schema.Component {
  collectionName: 'components_contact_contacts';
  info: {
    displayName: 'contact';
  };
  attributes: {
    email: Attribute.Email;
    mobile: Attribute.String;
  };
}

export interface ExperienceExperience extends Schema.Component {
  collectionName: 'components_experience_experiences';
  info: {
    displayName: 'experience';
  };
  attributes: {
    company: Attribute.String;
    role: Attribute.String;
    techtags: Attribute.Component<'technologies.tags', true>;
  };
}

export interface HighlightsHighlights extends Schema.Component {
  collectionName: 'components_highlights_highlights';
  info: {
    displayName: 'highlights';
    description: '';
  };
  attributes: {
    content: Attribute.Blocks;
  };
}

export interface ProjectsDemoProjects extends Schema.Component {
  collectionName: 'components_projects_demo_projects';
  info: {
    displayName: 'demo  projects';
    description: '';
  };
  attributes: {
    thumbnail: Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Attribute.Required;
    about: Attribute.String;
    stackTags: Attribute.Component<'stack.tags', true>;
    url: Attribute.String;
    githubUrl: Attribute.String;
    name: Attribute.String;
  };
}

export interface ProjectsProjectTags extends Schema.Component {
  collectionName: 'components_projects_project_tags';
  info: {
    displayName: 'projectTags';
  };
  attributes: {
    tags: Attribute.String;
  };
}

export interface SocialSocial extends Schema.Component {
  collectionName: 'components_social_socials';
  info: {
    displayName: 'social';
    description: '';
  };
  attributes: {
    icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    url: Attribute.String;
    name: Attribute.String;
  };
}

export interface StackTags extends Schema.Component {
  collectionName: 'components_stack_tags';
  info: {
    displayName: 'tags';
  };
  attributes: {
    techstack: Attribute.String;
  };
}

export interface StackTechTags extends Schema.Component {
  collectionName: 'components_stack_tech_tags';
  info: {
    displayName: 'tech-tags';
  };
  attributes: {
    language: Attribute.String;
    skill: Attribute.Float;
  };
}

export interface StackTechnologies extends Schema.Component {
  collectionName: 'components_stack_technologies';
  info: {
    displayName: 'technologies';
  };
  attributes: {};
}

export interface TechnologiesTags extends Schema.Component {
  collectionName: 'components_technologies_tags';
  info: {
    displayName: 'tags';
  };
  attributes: {
    tags: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'about.about': AboutAbout;
      'contact.contact': ContactContact;
      'experience.experience': ExperienceExperience;
      'highlights.highlights': HighlightsHighlights;
      'projects.demo-projects': ProjectsDemoProjects;
      'projects.project-tags': ProjectsProjectTags;
      'social.social': SocialSocial;
      'stack.tags': StackTags;
      'stack.tech-tags': StackTechTags;
      'stack.technologies': StackTechnologies;
      'technologies.tags': TechnologiesTags;
    }
  }
}

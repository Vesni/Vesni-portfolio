/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


export interface Project {
  id: string;
  title: string;
  tags: string[];
  image: string;
  year: string;
  description: string;
  techStack: string;
  link?: string;
  securityNote?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export enum Section {
  HERO = 'hero',
  PROJECTS = 'projects',
  ABOUT = 'about',
  CONTACT = 'contact',
}
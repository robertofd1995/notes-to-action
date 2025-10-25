# Product Requirements Document (PRD)
## Smart Todo List - AI-Powered Task Conversion

**Document Version:** 1.0  

---

## 1. Executive Summary

Smart Todo List is an intelligent task management application that converts unstructured notes (written or audio) into organized, actionable items. Instead of manually transcribing ideas, organizing them, and creating calendar entries, users can simply capture their thoughts and let AI handle the conversion into structured tasks with deadlines, priorities, descriptions, related items, and subtasks.

**Problem:** Users frequently capture ideas and notes across multiple platforms, leading to scattered information. Even when using a single repository, manual cleanup and conversion into actionable tasks is time-consuming and often left incomplete.

**Solution:** An AI-powered todo list that automatically processes notes and transforms them into well-organized, actionable items ready for execution.

---

## 2. Product Overview

### 2.1 Product Vision
To become the go-to platform for turning raw ideas and thoughts into organized, executable action plans—reducing cognitive load and friction in personal task management.

### 2.2 Key Features (MVP)
- **Note Capture:** Accept both written text and audio input
- **AI Conversion:** Automatically extract action items from notes
- **Rich Task Creation:** Generate tasks with deadline, priority, description
- **Unified Repository:** Single location for all notes and tasks
- **Task Management:** View, edit, complete, and archive tasks

## 2.2.1 Out of scope features:
- related items, and subtasks are not supported
- **Calendar Integration:** Automatically add tasks to user's calendar

### 2.3 Success Criteria
- Reduce time to convert notes into actionable tasks by 80%
- Users consistently use a single platform for task capture and management
- Average task completion rate improves by 40%
- User retention rate of 60%+ after 30 days

# North Start

# Metrics tree

---

## 3. User Personas

### 3.1 The Busy Professional
**Name:** Sarah, 32  
**Role:** Marketing Manager  
**Pain Points:** 
- Constantly getting interrupted with new ideas and requests
- Struggles to keep track of everything across email, Slack, and sticky notes
- Spends 30+ minutes daily organizing tasks

**Goals:** Capture ideas quickly without breaking focus, have everything in one place, prioritize effectively

---

### 3.2 The Creative Thinker
**Name:** Marcus, 28  
**Role:** Entrepreneur
**Pain Points:**
- Many ideas come at random times (in the shower, during walks, meetings)
- Prefers voice notes over typing
- Forgets ideas if not captured immediately

**Goals:** Quickly capture voice notes, have them automatically organized, distinguish between quick notes and actual projects

---

### 3.3 The Student/Learner
**Name:** Alex, 21  
**Role:** Computer Science Student  
**Pain Points:**
- Multiple classes, projects, and assignments spread across different platforms
- Difficulty prioritizing and managing dependencies between tasks
- Needs to sync with calendar to avoid conflicts

**Goals:** Centralize all academic tasks, automatically identify deadlines, see task dependencies

---


## 4. Core Features MVP (Detailed)

### 4.1 Note Input Methods
- **Text Input:** Web interface text area and mobile text input
- **Audio Input:** Voice recording with transcription

### 4.2 AI Processing Engine
- **Note Analysis:** Identify action items, deadlines, priorities, and relationships
- **Intelligent Extraction:** Parse natural language for due dates ("next Friday", "in 3 days")

### 4.3 Task Management
- **Task Dashboard:** List view
- **Filtering & Sorting:** By priority, deadline, status, tags
- **Task Editor:** Modify any task detail after creation
- **Status Tracking:** Not Started, In Progress, Completed, Archived

---

## 6. Technical Considerations

### 6.1 AI/ML Requirements
- Language model for natural language processing (GPT or similar, use open-router to be able to change between providers easily)
- Audio transcription service (web speech API or Whisper or equivalent for paid users)
- Context awareness for deadline parsing

### 6.2 Data Storage & Privacy
- API basic auth (user & password)
- API rate limiting to manage AI costs
- TODO
    - GDPR/privacy compliance for note data
    - Encrypted storage of user notes and tasks
    - User data retention policy

### 6.3 Performance
- Notes processed within 30 seconds
- UI responds within 200ms for all user interactions
- Support up to 10,000+ tasks per user

---

## 7. User Flow (MVP)

1. **User opens app** → Dashboard with recent tasks and quick input options
2. **User captures input** → Text input or audio recording
3. **AI processes note** → Displays suggested tasks extracted from note
4. **User reviews & edits** → Accept, reject, or modify suggested tasks
5. **Tasks saved** → Added to dashboard and synced to calendar
6. **User manages tasks** → Mark complete, edit details, organize as needed

---

## 8. Success Metrics & KPIs

### North start metric

Number of actions created

### v0 metric tree

* Number of signups
* Number of times app is opened
* Number of notes created
* Number of actions set to Done

---

## 9. Release Timeline

### Phase 1 (MVP - Days 1-3)
- Core note capture (text + audio)
- Basic AI extraction (single action items)
- Simple task dashboard

---

## 10. Design & UX Considerations

- **Mobile-First:** Designed for capture on mobile first, then refined on web
- **Speed:** All core actions (capture, save, view) should feel instant
- **Simplicity:** Minimal friction between thought and saved task
- **Feedback:** Clear indication of processing status and AI decisions
- **Accessibility:** WCAG 2.1 AA compliance

---

## 11 monetization

MVP app will be open source offering basic features, user will need to input their own keys and handle by themselves the deployment (not cloud self-service offering), but will provide quick guide to self host it in a easy and cost-effective way

If I want to continue with it, later we could create a paid version with extra features and provide the cloud offering version


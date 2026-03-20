export interface SkillResource {
  title: string;
  url: string;
  type: "docs" | "tutorial" | "book" | "video";
}

export interface Skill {
  id: string;
  name: string;
  color: string;
  tagline: string;
  description: string;
  useCases: string[];
  resources: SkillResource[];
  level: "Expert" | "Advanced" | "Proficient";
  yearsExp: number;
}

export const skills: Skill[] = [
  {
    id: "swift",
    name: "Swift",
    color: "#FF375F",
    tagline:
      "Apple's modern systems language for safe, expressive iOS development.",
    description: `Swift is the primary language for all Apple platform development. With its strong type system, value semantics, and modern concurrency model (async/await, actors), Swift enables writing code that is both safe and performant at scale.\n\nAfter 14+ years working with Objective-C and Swift, I've led migrations of multi-million-line codebases to idiomatic Swift, architected Swift Package Manager monorepos for enterprise teams, and contributed to internal Swift style guides adopted by 40+ engineers.\n\nSwift's evolution — from Swift 1.0 through Swift Concurrency in 5.5 and Macros in 5.9 — mirrors the maturation of iOS architecture itself. Keeping up with language proposals (SE-xxxx) and adopting features early has consistently given our teams a 6–12 month competitive advantage in developer experience.`,
    useCases: [
      "Building type-safe networking layers with Codable and async/await",
      "Designing modular Swift Package Manager architectures for large teams",
      "Implementing Swift Concurrency (actors, structured concurrency) to eliminate data races",
      "Writing Swift Macros to reduce boilerplate across feature modules",
      "Memory-efficient value types with Copy-on-Write semantics for large datasets",
      "Cross-platform Swift for server-side (Vapor) and Linux CLI tooling",
    ],
    resources: [
      {
        title: "The Swift Programming Language (Official)",
        url: "https://docs.swift.org/swift-book/",
        type: "docs",
      },
      {
        title: "Swift Evolution Proposals",
        url: "https://github.com/apple/swift-evolution",
        type: "docs",
      },
      {
        title: "Swift by Sundell — Deep Dives",
        url: "https://www.swiftbysundell.com",
        type: "tutorial",
      },
      {
        title: "Advanced Swift (objc.io)",
        url: "https://www.objc.io/books/advanced-swift/",
        type: "book",
      },
      {
        title: "WWDC — What's New in Swift",
        url: "https://developer.apple.com/videos/swift",
        type: "video",
      },
    ],
    level: "Expert",
    yearsExp: 10,
  },
  {
    id: "swiftui",
    name: "SwiftUI",
    color: "#0A84FF",
    tagline:
      "Declarative UI framework for building adaptive Apple platform interfaces.",
    description: `SwiftUI represents Apple's shift to declarative UI programming — a paradigm I've championed across every new project since its introduction at WWDC 2019. The combination of Previews, property wrappers (@State, @StateObject, @Environment), and the Layout protocol gives teams an unprecedented ability to iterate rapidly on UI.\n\nI've built production SwiftUI apps with 100K+ lines of view code — navigating real-world challenges like NavigationStack transitions, intrinsic size conflicts in complex List cells, and performance profiling with Instruments' SwiftUI template. Custom layout with the Layout protocol, matched geometry effects, and the Observation framework (Swift 5.9) are now core to my toolkit.\n\nThe biggest lesson: SwiftUI's declarative model rewards upfront architectural investment. Teams that treat views as pure functions of state — with well-defined model boundaries — ship faster and debug less.`,
    useCases: [
      "Composable design systems with ViewModifiers and custom Layout protocol implementations",
      "Complex navigation with NavigationStack and deep-link routing via NavigationPath",
      "Animating data-driven list changes with matched geometry effects",
      "Adaptive layouts across iPhone, iPad, Mac (Catalyst), and visionOS",
      "SwiftUI Previews-driven development workflow for rapid iteration",
      "Integrating UIKit views via UIViewRepresentable for legacy component reuse",
    ],
    resources: [
      {
        title: "Apple SwiftUI Documentation",
        url: "https://developer.apple.com/documentation/swiftui",
        type: "docs",
      },
      {
        title: "Hacking with Swift — 100 Days of SwiftUI",
        url: "https://www.hackingwithswift.com/100/swiftui",
        type: "tutorial",
      },
      {
        title: "Thinking in SwiftUI (objc.io)",
        url: "https://www.objc.io/books/thinking-in-swiftui/",
        type: "book",
      },
      {
        title: "WWDC — SwiftUI Sessions",
        url: "https://developer.apple.com/videos/swiftui",
        type: "video",
      },
    ],
    level: "Expert",
    yearsExp: 5,
  },
  {
    id: "objective-c",
    name: "Objective-C",
    color: "#FF9F0A",
    tagline:
      "The foundational language of iOS — critical for legacy codebases and runtime mastery.",
    description: `Before Swift, Objective-C was the language of Apple platforms. More importantly, Objective-C's runtime — message passing, method swizzling, category extensions — underpins much of what UIKit does under the hood. Deep Objective-C knowledge is irreplaceable when debugging a stack trace that dips into system frameworks.\n\nI've maintained and evolved Objective-C codebases totaling over 800K lines across HDFC Bank and Jio. This includes bridging headers for Swift interoperability, performance profiling with Allocations and Time Profiler, and writing custom Objective-C runtime code for dynamic method resolution.\n\nModern iOS work rarely starts new projects in Objective-C, but every senior iOS engineer encounters it in legacy migrations, SDK integrations, and crash symbolication. The ability to read a Swift crash that routes through UIKit Objective-C machinery — and understand why — is a real differentiator.`,
    useCases: [
      "Maintaining and modernizing legacy enterprise iOS codebases",
      "Writing bridging headers for seamless Swift/Obj-C interoperability",
      "Method swizzling for cross-cutting concerns (analytics, logging)",
      "Runtime introspection for dynamic feature registration patterns",
      "Profiling memory with NSZombie and Allocations instruments",
      "Debugging UIKit internals via Objective-C runtime knowledge",
    ],
    resources: [
      {
        title: "Programming with Objective-C (Apple)",
        url: "https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/",
        type: "docs",
      },
      {
        title: "Objective-C Runtime Programming Guide",
        url: "https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ObjCRuntimeGuide/",
        type: "docs",
      },
      {
        title: "Cocoa Design Patterns (Aaron Hillegass)",
        url: "https://www.amazon.com/Cocoa-Design-Patterns-Erik-Buck/dp/0321535022",
        type: "book",
      },
    ],
    level: "Expert",
    yearsExp: 12,
  },
  {
    id: "core-data",
    name: "Core Data",
    color: "#30D158",
    tagline:
      "Apple's object graph and persistence framework for offline-first iOS apps.",
    description: `Core Data is one of Apple's most powerful — and most misunderstood — frameworks. It's not just a database; it's an object graph management system with a rich change-tracking model, lazy loading, and faulting semantics that can dramatically reduce memory footprint in data-heavy apps.\n\nMy deepest Core Data work was building an offline-first loan origination system for Tata Capital — field agents in low-connectivity areas needed to collect documents, run credit checks, and submit applications without internet. I designed a CRDT-based sync engine on top of Core Data and CloudKit that resolves merge conflicts deterministically.\n\nI've also open-sourced a Core Data Sync Engine framework (used by 12 production apps) that wraps CloudKit transport with a testable mock layer and 92% unit test coverage. Core Data's complexity rewards investment — teams that master it ship features faster than those who constantly fight it.`,
    useCases: [
      "Offline-first data architecture with CloudKit sync",
      "CRDT-based conflict resolution for multi-device sync",
      "NSFetchedResultsController for performant, reactive list rendering",
      "Background context patterns for non-blocking data processing",
      "NSBatchUpdateRequest and NSBatchDeleteRequest for bulk operations",
      "Custom migration policies for complex schema evolution",
    ],
    resources: [
      {
        title: "Core Data Programming Guide (Apple)",
        url: "https://developer.apple.com/documentation/coredata",
        type: "docs",
      },
      {
        title: "Core Data by Tutorials (Kodeco)",
        url: "https://www.kodeco.com/books/core-data-by-tutorials",
        type: "book",
      },
      {
        title: "WWDC — Using Core Data with CloudKit",
        url: "https://developer.apple.com/videos/play/wwdc2019/202/",
        type: "video",
      },
      {
        title: "Donny Wals — Practical Core Data",
        url: "https://donnywals.com/books/",
        type: "book",
      },
    ],
    level: "Expert",
    yearsExp: 10,
  },
  {
    id: "arkit",
    name: "ARKit",
    color: "#BF5AF2",
    tagline:
      "World-class augmented reality framework for spatial computing on Apple devices.",
    description: `ARKit transforms iPhone and iPad into spatial computers, enabling apps to understand and interact with the physical world. From plane detection and object occlusion to LiDAR-powered depth mapping on Pro devices, ARKit's capabilities have expanded dramatically since its 2017 debut.\n\nI led a spatial computing prototype for architectural visualization — photorealistic 3D models rendered in AR at 60fps on iPhone 13 Pro, with multi-user collaboration via ARWorldMap persistence. The project was showcased at WWDC 2022 labs. Building it required deep knowledge of the full stack: ARKit sessions, RealityKit's entity-component system, custom Metal shaders for PBR materials, and LiDAR occlusion geometry.\n\nWith the arrival of visionOS and Apple Vision Pro, ARKit's underpinnings are now central to the future of computing. Engineers who understand spatial anchors, world tracking, and scene understanding are positioned for the next decade of Apple platform development.`,
    useCases: [
      "Plane detection and surface reconstruction for furniture/product placement apps",
      "LiDAR mesh occlusion for believable real-world AR integration",
      "ARWorldMap serialization for multi-session collaborative AR experiences",
      "Face tracking with ARFaceAnchor for Animoji-style expressions",
      "Image and object tracking for museum guides and industrial manuals",
      "Bridging ARKit to visionOS immersive spaces with SwiftUI",
    ],
    resources: [
      {
        title: "ARKit Documentation (Apple)",
        url: "https://developer.apple.com/documentation/arkit",
        type: "docs",
      },
      {
        title: "RealityKit Documentation",
        url: "https://developer.apple.com/documentation/realitykit",
        type: "docs",
      },
      {
        title: "WWDC — Meet ARKit 6",
        url: "https://developer.apple.com/videos/play/wwdc2022/10126/",
        type: "video",
      },
      {
        title: "Ray Wenderlich — ARKit by Tutorials",
        url: "https://www.kodeco.com/books/arkit-by-tutorials",
        type: "book",
      },
    ],
    level: "Advanced",
    yearsExp: 6,
  },
  {
    id: "metal",
    name: "Metal",
    color: "#40CBE0",
    tagline:
      "Low-level GPU programming for maximum rendering performance on Apple silicon.",
    description: `Metal is Apple's low-overhead graphics and compute API — the foundation of Core Animation, SceneKit, ARKit, and every GPU-accelerated framework on Apple platforms. When standard frameworks hit performance ceilings, Metal is the answer.\n\nFor Jio Cinema's IPL 2023 streaming milestone, I used Metal for hardware-accelerated HDR video rendering with custom tone-mapping shaders. This unlocked 4K HDR playback on iPhone 12+ without thermal throttling. The Metal Performance Shaders framework made our ML-based buffer prediction (for stall reduction) run directly on the Neural Engine.\n\nMetal programming requires a mental model shift: you're orchestrating GPU command queues, managing buffer lifetimes manually, and writing shader code in Metal Shading Language (a C++14 variant). The rewards — full GPU utilization, predictable frame pacing, and access to every feature of Apple silicon — are available to no other abstraction.`,
    useCases: [
      "Custom video rendering pipelines with HDR tone-mapping shaders",
      "GPU-accelerated image processing for real-time camera filters",
      "Metal Performance Shaders for on-device ML inference acceleration",
      "Particle systems and procedural generation for game-like UI effects",
      "Geometry shaders for AR mesh visualization and LiDAR point clouds",
      "Compute kernels for parallel data processing beyond GPU rendering",
    ],
    resources: [
      {
        title: "Metal Programming Guide (Apple)",
        url: "https://developer.apple.com/documentation/metal",
        type: "docs",
      },
      {
        title: "Metal by Tutorials (Kodeco)",
        url: "https://www.kodeco.com/books/metal-by-tutorials",
        type: "book",
      },
      {
        title: "WWDC — Explore Metal for Apple M-series",
        url: "https://developer.apple.com/videos/play/wwdc2022/10066/",
        type: "video",
      },
      {
        title: "Metal Shading Language Specification",
        url: "https://developer.apple.com/metal/Metal-Shading-Language-Specification.pdf",
        type: "docs",
      },
    ],
    level: "Advanced",
    yearsExp: 5,
  },
  {
    id: "ci-cd",
    name: "CI/CD",
    color: "#FF6961",
    tagline:
      "Automated build, test, and release pipelines for shipping iOS with confidence.",
    description: `Modern iOS teams ship faster and safer through automated pipelines. A well-designed CI/CD system eliminates manual release overhead, catches regressions before they reach users, and enables feature-flag-gated deploys that decouple code merges from production releases.\n\nI've architected CI/CD infrastructure for teams of 40+ engineers — including Xcode Cloud, GitHub Actions, and Bitrise configurations that run 2,000+ test cases in under 12 minutes using parallelized simulators. The pipelines include automated App Store Connect uploads, TestFlight distribution, release notes generation, and Slack notifications with build health summaries.\n\nThe highest-leverage investment: a robust fastlane setup with lanes for development, staging, and production — each with environment-specific signing profiles managed via match. This eliminated "it works on my machine" signing failures entirely and reduced new engineer onboarding from 2 days to 90 minutes.`,
    useCases: [
      "Xcode Cloud and GitHub Actions pipelines for automated iOS builds",
      "Fastlane automation for code signing, TestFlight, and App Store uploads",
      "Parallelized XCTest execution across multiple simulators",
      "Feature flag infrastructure (Firebase Remote Config / custom flags)",
      "Automated release notes and changelog generation from commit history",
      "Branch protection rules with required CI checks for team-wide quality gates",
    ],
    resources: [
      {
        title: "Xcode Cloud Documentation",
        url: "https://developer.apple.com/documentation/xcode/xcode-cloud",
        type: "docs",
      },
      {
        title: "Fastlane Docs",
        url: "https://docs.fastlane.tools",
        type: "docs",
      },
      {
        title: "GitHub Actions for iOS",
        url: "https://docs.github.com/en/actions",
        type: "tutorial",
      },
      {
        title: "WWDC — Automate with Xcode Cloud",
        url: "https://developer.apple.com/videos/play/wwdc2022/110374/",
        type: "video",
      },
    ],
    level: "Expert",
    yearsExp: 8,
  },
  {
    id: "system-design",
    name: "System Design",
    color: "#5E5CE6",
    tagline:
      "Architecting scalable, maintainable iOS systems that survive team growth.",
    description: `System design for mobile is the discipline of making architectural decisions whose consequences compound over years. The wrong choice on a Module boundary or data flow pattern becomes a 12-month refactor for a team of 20. The right choice enables independent feature teams to ship without coordination overhead.\n\nMy approach is informed by working on codebases across 4 major enterprises — each inherited with technical debt, and each successively modernized. Core principles I've applied: strict module boundaries via Swift Package Manager, unidirectional data flow (TCA / MVVM+Combine), dependency injection without third-party containers (just Swift protocols and environment), and treating testability as a first-class constraint.\n\nI run system design workshops for iOS teams — walking through trade-offs of monolith vs. modular, push vs. pull sync, and CRDT vs. last-write-wins conflict resolution. The goal is always the same: decisions that age well.`,
    useCases: [
      "Modular architecture with Swift Package Manager for independent feature teams",
      "Unidirectional data flow patterns (TCA, MVVM+Combine, Redux-style)",
      "Dependency injection design without third-party containers",
      "Offline-first data architecture with sync and conflict resolution strategies",
      "Performance budgeting: launch time, memory ceiling, frame drop thresholds",
      "Migration strategies for legacy monoliths to modular, testable architectures",
    ],
    resources: [
      {
        title: "Pointfree — The Composable Architecture",
        url: "https://www.pointfree.co/collections/composable-architecture",
        type: "tutorial",
      },
      {
        title: "Clean Architecture (Robert Martin)",
        url: "https://www.amazon.com/Clean-Architecture-Craftsmans-Software-Structure/dp/0134494164",
        type: "book",
      },
      {
        title: "iOS Architecture Patterns (objc.io)",
        url: "https://www.objc.io/books/app-architecture/",
        type: "book",
      },
      {
        title: "WWDC — Embrace Swift Package Manager",
        url: "https://developer.apple.com/videos/play/wwdc2022/110358/",
        type: "video",
      },
    ],
    level: "Expert",
    yearsExp: 10,
  },
];

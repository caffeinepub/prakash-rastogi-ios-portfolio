export interface Project {
  id: string;
  name: string;
  category: "FinTech" | "Multimedia" | "Enterprise" | "Core Tech";
  description: string;
  challenge: string;
  architecture: string;
  impact: string[];
  techStack: string[];
  color: string;
  year: string;
}

export const projects: Project[] = [
  {
    id: "hdfc-bank-mobile",
    name: "HDFC Bank Mobile",
    category: "FinTech",
    description:
      "iOS lead for one of India's largest banking apps serving 8M+ active users.",
    challenge:
      "Scaling a legacy Objective-C codebase to a modern SwiftUI architecture while maintaining 99.99% uptime for 8 million daily transactions. Required migrating critical payment flows without interrupting live users.",
    architecture:
      "Adopted a modular Swift Package Manager architecture with feature modules (Auth, Payments, Investments, Cards). Implemented a reactive data layer using Combine and a custom sync engine for offline transactions.",
    impact: [
      "8M+ active users onboarded",
      "40% crash rate reduction",
      "2.1s → 0.8s app launch time",
      "₹2,000Cr daily transaction volume",
    ],
    techStack: [
      "Swift",
      "SwiftUI",
      "Combine",
      "Core Data",
      "Face ID",
      "UPI SDK",
      "Swift Package Manager",
    ],
    color: "#0A84FF",
    year: "2021–2024",
  },
  {
    id: "jio-cinema",
    name: "Jio Cinema",
    category: "Multimedia",
    description:
      "4K streaming architecture for India's largest OTT platform during IPL 2023.",
    challenge:
      "Engineering a streaming pipeline that could handle 18 million simultaneous viewers during IPL live matches — a world record at the time. Required rebuilding the entire AVFoundation layer and custom buffering logic.",
    architecture:
      "Built a custom AVFoundation pipeline with adaptive HLS buffering, Metal-accelerated video rendering for HDR content, and a predictive pre-buffer system using ML to reduce stalls by 70%.",
    impact: [
      "18M concurrent viewers (world record)",
      "4K HDR streaming on iPhone 12+",
      "70% reduction in buffering stalls",
      "IPL 2023 zero-downtime delivery",
    ],
    techStack: ["Swift", "AVFoundation", "Metal", "HLS", "Core ML", "TVMLKit"],
    color: "#FF375F",
    year: "2022–2024",
  },
  {
    id: "tata-capital",
    name: "Tata Capital",
    category: "FinTech",
    description:
      "End-to-end loan origination platform with real-time Core Data sync.",
    challenge:
      "Building a fully offline-capable loan origination flow for field agents in low-connectivity regions. Agents needed to collect documents, run credit checks, and submit applications without reliable internet.",
    architecture:
      "Designed a conflict-free replicated data type (CRDT) sync engine on top of Core Data and CloudKit. The system resolves merge conflicts deterministically and queues API calls for when connectivity is restored.",
    impact: [
      "100% offline capability for field agents",
      "₹500Cr loans disbursed via app",
      "60% reduction in data entry errors",
      "Sync latency < 200ms on reconnect",
    ],
    techStack: [
      "Swift",
      "Core Data",
      "CloudKit",
      "CryptoKit",
      "Vision (OCR)",
      "Combine",
    ],
    color: "#30D158",
    year: "2020–2022",
  },
  {
    id: "reliance-retail",
    name: "Reliance Retail",
    category: "Enterprise",
    description:
      "Smart inventory management with BLE asset tracking across 1,200+ stores.",
    challenge:
      "Tracking 50 million SKUs across 1,200 JioMart stores using Bluetooth Low Energy beacons and RFID. The primary challenge was power efficiency — store associates needed 8-hour battery life while continuously scanning.",
    architecture:
      "Built a CoreBluetooth mesh scanner with background mode, location-anchored beacon clustering, and a custom binary protocol that reduced BLE packet size by 65% vs generic GATT profiles.",
    impact: [
      "1,200+ stores deployed",
      "50M SKUs tracked in real-time",
      "30% reduction in stock discrepancies",
      "8-hour battery life maintained",
    ],
    techStack: [
      "Swift",
      "CoreBluetooth",
      "CoreLocation",
      "MapKit",
      "RFID SDK",
      "Realm",
    ],
    color: "#FF9F0A",
    year: "2019–2021",
  },
  {
    id: "arkit-visualizer",
    name: "ARKit Visualizer",
    category: "Core Tech",
    description:
      "Spatial computing prototype for architectural visualization using ARKit and RealityKit.",
    challenge:
      "Creating photorealistic real-time rendering of architectural models in AR that could handle occlusion, accurate lighting, and physics interactions — all while maintaining 60fps on an iPhone 13 Pro.",
    architecture:
      "Leveraged RealityKit's photogrammetry pipeline combined with custom Metal shaders for PBR materials. Used ARWorldMap persistence for multi-session collaboration so multiple users can annotate the same space.",
    impact: [
      "60fps AR at 4M polygon count",
      "Multi-user collaboration via ARWorldMap",
      "Featured at WWDC 2022 labs",
      "Sub-2cm spatial accuracy",
    ],
    techStack: [
      "Swift",
      "ARKit",
      "RealityKit",
      "Metal",
      "SceneKit",
      "LiDAR SDK",
    ],
    color: "#BF5AF2",
    year: "2022",
  },
  {
    id: "core-data-sync-engine",
    name: "Core Data Sync Engine",
    category: "Core Tech",
    description:
      "Open-source offline-first framework powering 12 production apps.",
    challenge:
      "Apple's CloudKit sync is notoriously hard to get right. Conflict resolution, schema migrations, and privacy-preserving sync are poorly documented. This framework abstracts all of that into a simple, testable API.",
    architecture:
      "A three-layer architecture: a Core Data NSPersistentStoreCoordinator adapter, a CRDT-based conflict resolver, and a CloudKit transport layer. Fully unit-tested with 92% coverage and a mock transport for CI environments.",
    impact: [
      "12 production apps powered",
      "500K+ end users benefiting",
      "92% unit test coverage",
      "Open-sourced on GitHub",
    ],
    techStack: [
      "Swift",
      "Core Data",
      "CloudKit",
      "XCTest",
      "Swift Concurrency",
      "Combine",
    ],
    color: "#40CBE0",
    year: "2023",
  },
];

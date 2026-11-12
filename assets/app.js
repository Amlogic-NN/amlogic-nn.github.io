
/* Mobile: keep the active nav tab visible and jump to the top when switching sections */
document.addEventListener('DOMContentLoaded',function(){
 var nav=document.getElementById('nav');if(!nav)return;
 var mq=window.matchMedia('(max-width:720px)');
 function reveal(){if(!mq.matches)return;var a=nav.querySelector('button.nav-child.active')||nav.querySelector('button.active');
  if(a){var l=a.offsetLeft-nav.offsetLeft,r=l+a.offsetWidth;if(l<nav.scrollLeft||r>nav.scrollLeft+nav.clientWidth)nav.scrollLeft=Math.max(0,l-24)}}
 new MutationObserver(reveal).observe(nav,{childList:true});
 nav.addEventListener('click',function(e){if(mq.matches&&e.target.closest('[data-section]'))window.scrollTo(0,0)});
 reveal();
});


/* CONTENT CONFIGURATION: edit SECTIONS and RESOURCES to maintain this portal. Empty URLs display Coming Soon. */
const SECTIONS=[
  {
    "id": "home",
    "name": "Overview",
    "icon": "grid",
    "desc": "A guide to Amlogic AI development resources."
  },
  {
    "id": "performance",
    "name": "Performance",
    "icon": "chart",
    "desc": "Explore model throughput, latency, memory and accuracy benchmarks."
  },
  {
    "id": "agents",
    "name": "Agent Examples",
    "icon": "grid",
    "desc": "Reference applications for building and extending on-device AI workflows."
  },
  {
    "id": "skills",
    "name": "Skills / MCP",
    "icon": "layers",
    "desc": "Explore vision, audio and tool integration resources for your Agent."
  },
  {
    "id": "demos",
    "name": "Model Demos",
    "icon": "eye",
    "desc": "All 77 models in the Model Playground support list. Search by model name, quantization or platform. Updated October 12, 2026."
  },
  {
    "id": "sdk",
    "name": "SDK / Toolkit",
    "icon": "code",
    "desc": "Convert, quantize, compile and deploy models on Amlogic platforms."
  },
  {
    "id": "models",
    "name": "ADLA Hub",
    "icon": "database",
    "desc": "Download precompiled ADLA model packages for your target platform."
  },
  {
    "id": "start",
    "name": "Doc Center",
    "icon": "book",
    "desc": "Development guides, SDK documentation, API references and deployment instructions."
  }
];
const RESOURCES=[
  {
    "section": "agents",
    "category": "Multimodal",
    "name": "AI NAS Agent",
    "en": "Local Media Search · Multimodal AI",
    "desc": "Explore local media search and content management for home storage, including image retrieval, person search and media summaries.",
    "tags": [
      "image.search",
      "face.search",
      "media.summary"
    ],
    "meta": "Reference Scenario",
    "status": "Planned Example",
    "icon": "database",
    "color": "#4884bd",
    "url": "",
    "thumb": "assets/models/scene-ai-nas-agent.webp"
  },
  {
    "section": "agents",
    "category": "Vision",
    "name": "AI Shopping Agent",
    "en": "Visual Search · Product Discovery",
    "desc": "A reference scenario for visual product recognition, information retrieval and recommendations.",
    "tags": [
      "product.detect",
      "product.search",
      "recommend"
    ],
    "meta": "Reference Scenario",
    "status": "Planned Example",
    "icon": "bag",
    "color": "#d99148",
    "url": "",
    "thumb": "assets/models/scene-ai-shopping-agent.webp"
  },
  {
    "section": "agents",
    "category": "Speech",
    "name": "Meeting Summary",
    "en": "ASR · Speaker Diarization · Summary",
    "desc": "A reference workflow combining speech transcription, speaker diarization and meeting summaries.",
    "tags": [
      "asr",
      "diarization",
      "summarize"
    ],
    "meta": "Reference Scenario",
    "status": "Planned Example",
    "icon": "video",
    "color": "#83a663",
    "url": "",
    "thumb": "assets/models/scene-meeting-summary.webp"
  },
  {
    "section": "agents",
    "category": "Tool Calling",
    "name": "Agent Client Integration",
    "en": "Agent Framework Integration",
    "desc": "Connect an OpenAI-compatible Agent client and implement the tool execution loop. See endpoint, model ID and tool result configuration.",
    "tags": [
      "PicoClaw",
      "DeepSeek Harness",
      "LangChain"
    ],
    "meta": "Integration Guide",
    "status": "Documentation",
    "icon": "grid",
    "color": "#8f7cbe",
    "url": "https://github.com/Amlogic-NN/amlogic-agent-server#connect-an-agent-application",
    "thumb": "assets/models/scene-agent-client.webp"
  },
  {
    "section": "agents",
    "category": "Speech",
    "name": "Home Voice Assistant",
    "en": "Speech Input · Conversation · Speech Output",
    "desc": "A voice interaction reference combining ASR, LLM and TTS, with optional extensions for home device control.",
    "tags": [
      "asr",
      "llm.chat",
      "tts"
    ],
    "meta": "Reference Scenario",
    "status": "Planned Example",
    "icon": "mic",
    "color": "#c6759e",
    "url": "",
    "thumb": "assets/models/scene-home-voice-assistant.webp"
  },
  {
    "section": "agents",
    "category": "Vision",
    "name": "OCR Translate",
    "en": "Text Recognition · Translation",
    "desc": "A reference workflow that extracts text from images and processes it with a language model.",
    "tags": [
      "ocr",
      "translate",
      "vision"
    ],
    "meta": "Reference Scenario",
    "status": "Planned Example",
    "icon": "book",
    "color": "#4ca29b",
    "url": "",
    "thumb": "assets/models/scene-ocr-translate.webp"
  },
  {
    "section": "skills",
    "category": "Vision",
    "name": "Vision Skills",
    "en": "Detection · Recognition · OCR",
    "desc": "A resource placeholder for on-device detection, recognition and OCR skills, including integration instructions.",
    "tags": [
      "detection",
      "recognition",
      "ocr"
    ],
    "meta": "Skills Resource",
    "status": "Coming Soon",
    "icon": "eye",
    "color": "#4884bd",
    "url": "",
    "thumb": "assets/models/scene-vision-skills.webp"
  },
  {
    "section": "skills",
    "category": "Audio",
    "name": "Audio Skills",
    "en": "ASR · TTS · Voice Processing",
    "desc": "A resource placeholder for speech recognition, speech synthesis and speaker-related skills.",
    "tags": [
      "Whisper",
      "SenseVoice",
      "tts"
    ],
    "meta": "Skills Resource",
    "status": "Coming Soon",
    "icon": "mic",
    "color": "#c6759e",
    "url": "",
    "thumb": "assets/models/scene-audio-skills.webp"
  },
  {
    "section": "skills",
    "category": "Tools",
    "name": "MCP Tools",
    "en": "External Tools · Custom Integration",
    "desc": "A resource placeholder for MCP service setup, tool definitions and custom integration examples.",
    "tags": [
      "MCP",
      "tools",
      "integration"
    ],
    "meta": "Tool Integration",
    "status": "Coming Soon",
    "icon": "layers",
    "color": "#8f7cbe",
    "url": "",
    "thumb": "assets/models/scene-mcp-tools.webp"
  },
  {
    "section": "sdk",
    "category": "Toolchain",
    "name": "Amlogic NN Toolkit",
    "en": "Conversion · Quantization · Compilation · Inference",
    "desc": "A full toolchain for model conversion, quantization, compilation and inference. See component documentation for installation and platform support.",
    "tags": [
      "Python",
      "CNN",
      "LLM",
      "NPU"
    ],
    "meta": "GitHub Repository",
    "status": "Repository",
    "icon": "code",
    "color": "#4884bd",
    "url": "https://github.com/Amlogic-NN/amlnn-toolkit/blob/main/amlnn_toolkit/readme.md"
  },
  {
    "section": "sdk",
    "category": "Python SDK",
    "name": "NN Edge Toolkit Lite",
    "en": "Lightweight Python Inference SDK",
    "desc": "A lightweight Python inference SDK for Debian boards, designed for CNN and other small-model workloads.",
    "tags": [
      "Python",
      "Debian",
      "CNN"
    ],
    "meta": "SDK Documentation",
    "status": "Documentation",
    "icon": "layers",
    "color": "#4ca29b",
    "url": "https://github.com/Amlogic-NN/amlnn-toolkit/blob/main/amlnn_toolkit_lite/amlnn_edge_toolkit_lite/readme.md"
  },
  {
    "section": "sdk",
    "category": "Python SDK",
    "name": "LLM Edge Toolkit Lite",
    "en": "On-device LLM Inference",
    "desc": "A lightweight Python LLM inference SDK for Debian boards, with streaming output, multi-turn conversations, sampling controls and chat templates.",
    "tags": [
      "Python",
      "LLM",
      "ADLA"
    ],
    "meta": "SDK Documentation",
    "status": "Documentation",
    "icon": "code",
    "color": "#8f7cbe",
    "url": "https://github.com/Amlogic-NN/amlnn-toolkit/blob/main/amlnn_toolkit_lite/amlllm_edge_toolkit_lite/readme.md"
  },
  {
    "section": "sdk",
    "category": "Serving",
    "name": "Amlogic Agent Server",
    "en": "OpenAI Compatible API · Edge–Cloud Routing",
    "desc": "OpenAI-compatible on-device LLM/VLM serving with streaming, tool calling, ASR and KV-cache reuse. Optional edge–cloud routing is experimental.",
    "tags": [
      "OpenAI API",
      "ASR",
      "Tool Calling",
      "KV Cache"
    ],
    "meta": "Serving Resource",
    "status": "Repository",
    "icon": "layers",
    "color": "#d99148",
    "url": "https://github.com/Amlogic-NN/amlogic-agent-server"
  },
  {
    "section": "models",
    "category": "Model Platforms",
    "name": "ADLA Models · Hugging Face",
    "en": "Precompiled Models · Model Distribution",
    "desc": "Browse the Amlogic ADLA model repository. Select model packages using your target platform and SDK documentation.",
    "tags": [
      "ADLA",
      "Hugging Face",
      "Model Downloads"
    ],
    "meta": "Hugging Face",
    "status": "Model Repository",
    "icon": "layers",
    "color": "#4ca29b",
    "url": "https://huggingface.co/Amlogic-NN/amlnn-adla-models"
  },
  {
    "section": "models",
    "category": "Model Platforms",
    "name": "ADLA Models · ModelScope",
    "en": "ADLA Model Repository · ModelScope",
    "desc": "Browse the Amlogic ADLA model repository on ModelScope. Agent Server documentation describes bootstrap-based model downloads.",
    "url": "https://www.modelscope.cn/models/Amlogic/amlnn-adla-models",
    "tags": [
      "ADLA",
      "ModelScope",
      "Bootstrap"
    ],
    "icon": "database",
    "meta": "ModelScope",
    "status": "Model Repository",
    "color": "#4884bd"
  },
  {
    "section": "sdk",
    "category": "C/C++ SDK",
    "name": "NN Runtime · C/C++",
    "en": "Native Neural Network Inference",
    "desc": "Integrate native inference with libnnsdk.so and nnsdk2.h. Explore Android / Linux setup, build steps and base API examples.",
    "url": "https://github.com/Amlogic-NN/amlnn-toolkit/blob/main/amlnn_runtime/nn_runtime/readme.md",
    "tags": [
      "C/C++",
      "CNN",
      "Android",
      "Linux"
    ],
    "icon": "code",
    "meta": "Developer Documentation",
    "status": "Documentation",
    "color": "#4884bd"
  },
  {
    "section": "sdk",
    "category": "C/C++ SDK",
    "name": "LLM Runtime · C/C++",
    "en": "Native LLM Inference",
    "desc": "Integrate native LLM inference with libllmsdk.so and llmsdk.h. Explore streaming callbacks, multi-turn sessions and base API examples.",
    "url": "https://github.com/Amlogic-NN/amlnn-toolkit/blob/main/amlnn_runtime/llm_runtime/readme.md",
    "tags": [
      "C/C++",
      "LLM",
      "Streaming"
    ],
    "icon": "code",
    "meta": "Developer Documentation",
    "status": "Documentation",
    "color": "#4884bd"
  },
  {
    "section": "demos",
    "category": "Guides",
    "name": "Platform Build Guide",
    "en": "Android · Linux · Cross Compilation",
    "desc": "Set up the cross-compilation toolchain and build a Model Playground example for your board.",
    "url": "https://github.com/Amlogic-NN/amlnn-model-playground/blob/main/docs/Platform_compile_guide.md",
    "tags": [
      "Android",
      "Linux",
      "Toolchain"
    ],
    "icon": "book",
    "meta": "Developer Documentation",
    "status": "Documentation",
    "color": "#4884bd",
    "platforms": "",
    "descZh": "配置交叉编译工具链，并为你手上的板卡编译一个 Model Playground 示例。"
  },
  {
    "section": "demos",
    "category": "Classification",
    "name": "mobilenet_v2",
    "en": "Classification · W8A8",
    "desc": "Lightweight ImageNet classifier — the usual smoke test for a new board or a new toolchain build.",
    "tags": [],
    "meta": "Model Playground · CNN",
    "status": "Supported",
    "icon": "layers",
    "color": "#4884bd",
    "url": "https://github.com/Amlogic-NN/amlnn-model-playground/tree/main/examples/mobilenet/",
    "platforms": "A311D2 / S905X5 / A311Y3 / C305X2 / A123X",
    "descZh": "轻量 ImageNet 分类模型，检验新板卡或新工具链是否可用的常用冒烟测试。",
    "thumb": "assets/models/mobilenet-v2.webp"
  },
  {
    "section": "demos",
    "category": "Classification",
    "name": "resnet50-v2",
    "en": "Classification · W8A8",
    "desc": "Standard 50-layer ResNet, used as the accuracy baseline when comparing quantized builds.",
    "tags": [],
    "meta": "Model Playground · CNN",
    "status": "Supported",
    "icon": "layers",
    "color": "#4884bd",
    "url": "https://github.com/Amlogic-NN/amlnn-model-playground/tree/main/examples/resnet/",
    "platforms": "A311D2 / S905X5 / A311Y3 / C305X2 / A123X",
    "descZh": "标准 50 层 ResNet，比较不同量化版本精度时的基准。",
    "thumb": "assets/models/resnet50-v2.webp"
  },
  {
    "section": "demos",
    "category": "Classification",
    "name": "DINO backbone + linear classifier",
    "en": "Classification · W8A16",
    "desc": "Self-supervised DINO features plus a linear head: strong classification without full fine-tuning.",
    "tags": [],
    "meta": "Model Playground · CNN",
    "status": "Supported",
    "icon": "layers",
    "color": "#4884bd",
    "url": "https://github.com/Amlogic-NN/amlnn-model-playground/tree/main/examples/DINO/",
    "platforms": "A311Y3 / C305X2 / A123X",
    "descZh": "DINO 自监督特征 + 线性分类头，无需全量微调也能获得较强分类效果。",
    "thumb": "assets/models/dino-backbone-linear-classifier.webp"
  },
  {
    "section": "demos",
    "category": "Audio",
    "name": "YAMNet",
    "en": "Audio Classification · W8A16",
    "desc": "Audio event classifier with 521 sound classes — speech, music, alarms and more.",
    "tags": [],
    "meta": "Model Playground · CNN",
    "status": "Supported",
    "icon": "mic",
    "color": "#4884bd",
    "url": "https://github.com/Amlogic-NN/amlnn-model-playground/tree/main/examples/yamnet/",
    "platforms": "A311Y3 / C305X2 / A123X",
    "descZh": "音频事件分类，覆盖 521 类声音：语音、音乐、警报等。"
  },
  {
    "section": "demos",
    "category": "Detection",
    "name": "DETR",
    "en": "Object Detection · W16A16",
    "desc": "Transformer detector without anchors or NMS — simpler post-processing, heavier compute.",
    "tags": [],
    "meta": "Model Playground · CNN",
    "status": "Supported",
    "icon": "layers",
    "color": "#4884bd",
    "url": "https://github.com/Amlogic-NN/amlnn-model-playground/tree/main/examples/DETR/",
    "platforms": "A311Y3 / C305X2 / A123X",
    "descZh": "Transformer 检测器，不需要 anchor 与 NMS，后处理更简单但算力开销更高。",
    "thumb": "assets/models/detr.webp"
  },
  {
    "section": "demos",
    "category": "Detection",
    "name": "PP-YOLOE",
    "en": "Object Detection · W8A8",
    "desc": "PaddleDetection YOLO variant with a balanced accuracy/speed trade-off.",
    "tags": [],
    "meta": "Model Playground · CNN",
    "status": "Supported",
    "icon": "layers",
    "color": "#4884bd",
    "url": "https://github.com/Amlogic-NN/amlnn-model-playground/tree/main/examples/ppyoloe/",
    "platforms": "A311D2 / S905X5 / A311Y3 / C305X2 / A123X",
    "descZh": "PaddleDetection 的 YOLO 变体，精度与速度较均衡。",
    "thumb": "assets/models/pp-yoloe.webp"
  },
  {
    "section": "demos",
    "category": "Detection",
    "name": "QR code detection",
    "en": "Object Detection · W8A8",
    "desc": "Locates QR codes in a frame; pass the crop to a decoder to read the payload.",
    "tags": [],
    "meta": "Model Playground · CNN",
    "status": "Supported",
    "icon": "layers",
    "color": "#4884bd",
    "url": "https://github.com/Amlogic-NN/amlnn-model-playground/tree/main/examples/qrcode/",
    "platforms": "A311D2 / S905X5 / A311Y3 / C305X2 / A123X",
    "descZh": "在画面中定位二维码，裁出区域后交给解码库读取内容。",
    "thumb": "assets/models/qr-code-detection.webp"
  },
  {
    "section": "demos",
    "category": "Detection",
    "name": "YOLOv5",
    "en": "Object Detection · W8A8",
    "desc": "Anchor-based YOLO with the most mature export path — start here if you need tutorials.",
    "tags": [],
    "meta": "Model Playground · CNN",
    "status": "Supported",
    "icon": "layers",
    "color": "#4884bd",
    "url": "https://github.com/Amlogic-NN/amlnn-model-playground/tree/main/examples/yolov5/",
    "platforms": "A311D2 / S905X5 / A311Y3 / C305X2 / A123X",
    "descZh": "基于 anchor 的 YOLO，导出流程最成熟；需要大量现成教程时优先选它。",
    "thumb": "assets/models/yolov5.webp"
  },
  {
    "section": "demos",
    "category": "Detection",
    "name": "YOLOv6",
    "en": "Object Detection · W8A8",
    "desc": "YOLO variant tuned for industrial deployment, with efficient reparameterised blocks.",
    "tags": [],
    "meta": "Model Playground · CNN",
    "status": "Supported",
    "icon": "layers",
    "color": "#4884bd",
    "url": "https://github.com/Amlogic-NN/amlnn-model-playground/tree/main/examples/yolov6/",
    "platforms": "A311D2 / S905X5 / A311Y3 / C305X2 / A123X",
    "descZh": "面向工业部署的 YOLO 变体，使用高效的重参数化结构。",
    "thumb": "assets/models/yolov6.webp"
  },
  {
    "section": "demos",
    "category": "Detection",
    "name": "YOLOv7",
    "en": "Object Detection · W8A8",
    "desc": "Accuracy-focused YOLO release that is still common in existing pipelines.",
    "tags": [],
    "meta": "Model Playground · CNN",
    "status": "Supported",
    "icon": "layers",
    "color": "#4884bd",
    "url": "https://github.com/Amlogic-NN/amlnn-model-playground/tree/main/examples/yolov7/",
    "platforms": "A311D2 / S905X5 / A311Y3 / C305X2 / A123X",
    "descZh": "偏重精度的 YOLO 版本，在已有项目中仍很常见。",
    "thumb": "assets/models/yolov7.webp"
  },
  {
    "section": "demos",
    "category": "Detection",
    "name": "YOLOv8",
    "en": "Object Detection · W8A8",
    "desc": "Anchor-free YOLO with a clean API and the widest tooling support today.",
    "tags": [],
    "meta": "Model Playground · CNN",
    "status": "Supported",
    "icon": "layers",
    "color": "#4884bd",
    "url": "https://github.com/Amlogic-NN/amlnn-model-playground/tree/main/examples/yolov8/",
    "platforms": "A311D2 / S905X5 / A311Y3 / C305X2 / A123X",
    "descZh": "Anchor-free 的 YOLO，接口干净、周边工具支持最广。",
    "thumb": "assets/models/yolov8.webp"
  },
  {
    "section": "demos",
    "category": "Detection",
    "name": "YOLOv10",
    "en": "Object Detection · W8A8",
    "desc": "YOLO variant with NMS-free inference, which shortens the post-processing path.",
    "tags": [],
    "meta": "Model Playground · CNN",
    "status": "Supported",
    "icon": "layers",
    "color": "#4884bd",
    "url": "https://github.com/Amlogic-NN/amlnn-model-playground/tree/main/examples/yolov10/",
    "platforms": "A311D2 / S905X5 / A311Y3 / C305X2 / A123X",
    "descZh": "NMS-free 的 YOLO 变体，可缩短后处理路径。",
    "thumb": "assets/models/yolov10.webp"
  },
  {
    "section": "demos",
    "category": "Detection",
    "name": "YOLO11",
    "en": "Object Detection · W8A8",
    "desc": "Latest YOLO generation; same export flow as YOLOv8 with revised backbones.",
    "tags": [],
    "meta": "Model Playground · CNN",
    "status": "Supported",
    "icon": "layers",
    "color": "#4884bd",
    "url": "https://github.com/Amlogic-NN/amlnn-model-playground/tree/main/examples/yolov11/",
    "platforms": "A311D2 / S905X5 / A311Y3 / C305X2 / A123X",
    "descZh": "最新一代 YOLO，导出流程与 YOLOv8 一致，主干网络有更新。",
    "thumb": "assets/models/yolo11.webp"
  },
  {
    "section": "demos",
    "category": "Detection",
    "name": "YOLOE",
    "en": "Object Detection · W8A8",
    "desc": "Open-vocabulary detection: describe target classes as text, no retraining needed.",
    "tags": [],
    "meta": "Model Playground · CNN",
    "status": "Supported",
    "icon": "layers",
    "color": "#4884bd",
    "url": "https://github.com/Amlogic-NN/amlnn-model-playground/tree/main/examples/yoloe/",
    "platforms": "A311D2 / S905X5 / A311Y3 / C305X2 / A123X",
    "descZh": "开放词表检测：用文字描述目标类别即可检测，无需重新训练。",
    "thumb": "assets/models/yoloe.webp"
  },
  {
    "section": "demos",
    "category": "Detection",
    "name": "YOLO-World",
    "en": "Object Detection · W8A8",
    "desc": "Text-prompted detector for zero-shot classes; good for prototypes that change often.",
    "tags": [],
    "meta": "Model Playground · CNN",
    "status": "Supported",
    "icon": "layers",
    "color": "#4884bd",
    "url": "https://github.com/Amlogic-NN/amlnn-model-playground/tree/main/examples/yoloworld/",
    "platforms": "A311D2 / S905X5 / A311Y3 / C305X2 / A123X",
    "descZh": "支持文字提示的零样本检测器，适合目标类别经常变化的产品原型。",
    "thumb": "assets/models/yolo-world.webp"
  },
  {
    "section": "demos",
    "category": "Detection",
    "name": "YOLOX",
    "en": "Object Detection · W8A8",
    "desc": "Anchor-free YOLO with a decoupled head — the worked example used in the Quick Start.",
    "tags": [],
    "meta": "Model Playground · CNN",
    "status": "Supported",
    "icon": "layers",
    "color": "#4884bd",
    "url": "https://github.com/Amlogic-NN/amlnn-model-playground/tree/main/examples/yolox/",
    "platforms": "A311D2 / S905X5 / A311Y3 / C305X2 / A123X",
    "descZh": "Anchor-free、解耦头的 YOLO，也是本站在快速入门里使用的完整示例。",
    "thumb": "assets/models/yolox.webp"
  },
  {
    "section": "demos",
    "category": "Detection",
    "name": "RetinaFace",
    "en": "Face Detection · W8A8",
    "desc": "Face detection with five-point landmarks; one forward pass gives boxes and keypoints.",
    "tags": [],
    "meta": "Model Playground · CNN",
    "status": "Supported",
    "icon": "layers",
    "color": "#4884bd",
    "url": "https://github.com/Amlogic-NN/amlnn-model-playground/tree/main/examples/retinaface/",
    "platforms": "A311D2 / S905X5 / A311Y3 / C305X2 / A123X",
    "descZh": "人脸检测并输出五点关键点，一次前向即可同时得到人脸框与关键点。",
    "thumb": "assets/models/retinaface.webp"
  },
  {
    "section": "demos",
    "category": "Pose & Gesture",
    "name": "Gesture",
    "en": "Gesture Recognition · W8A8",
    "desc": "Hand gesture classification for touch-free control.",
    "tags": [],
    "meta": "Model Playground · CNN",
    "status": "Supported",
    "icon": "layers",
    "color": "#4884bd",
    "url": "https://github.com/Amlogic-NN/amlnn-model-playground/tree/main/examples/gesture/",
    "platforms": "A311D2 / S905X5 / A311Y3 / C305X2 / A123X",
    "descZh": "手势分类，用于免触摸操控。",
    "thumb": "assets/models/gesture.webp"
  },
  {
    "section": "demos",
    "category": "Segmentation",
    "name": "DeepLabV3",
    "en": "Image Segmentation · W8A8",
    "desc": "Semantic segmentation with atrous convolutions; per-pixel class masks.",
    "tags": [],
    "meta": "Model Playground · CNN",
    "status": "Supported",
    "icon": "layers",
    "color": "#4884bd",
    "url": "https://github.com/Amlogic-NN/amlnn-model-playground/tree/main/examples/deeplabv3/",
    "platforms": "A311D2 / S905X5 / A311Y3 / C305X2 / A123X",
    "descZh": "使用空洞卷积的语义分割，输出逐像素类别掩码。",
    "thumb": "assets/models/deeplabv3.webp"
  },
  {
    "section": "demos",
    "category": "Segmentation",
    "name": "MobileSAM",
    "en": "Image Segmentation · W8A16",
    "desc": "Promptable segmentation (point or box) in a mobile-sized model.",
    "tags": [],
    "meta": "Model Playground · CNN",
    "status": "Supported",
    "icon": "layers",
    "color": "#4884bd",
    "url": "https://github.com/Amlogic-NN/amlnn-model-playground/tree/main/examples/mobilesam/",
    "platforms": "A311Y3 / C305X2 / A123X",
    "descZh": "移动端尺寸的可提示分割，支持点选或框选。",
    "thumb": "assets/models/mobilesam.webp"
  },
  {
    "section": "demos",
    "category": "Segmentation",
    "name": "PP-LiteSeg",
    "en": "Image Segmentation · W8A8",
    "desc": "Lightweight real-time segmentation, aimed at video-rate use.",
    "tags": [],
    "meta": "Model Playground · CNN",
    "status": "Supported",
    "icon": "layers",
    "color": "#4884bd",
    "url": "https://github.com/Amlogic-NN/amlnn-model-playground/tree/main/examples/ppseg/",
    "platforms": "A311D2 / S905X5 / A311Y3 / C305X2 / A123X",
    "descZh": "轻量实时分割模型，面向视频帧率下的应用。",
    "thumb": "assets/models/pp-liteseg.webp"
  },
  {
    "section": "demos",
    "category": "Segmentation",
    "name": "YOLOv5 segmentation",
    "en": "Instance Segmentation · W8A8",
    "desc": "Instance segmentation built on YOLOv5: boxes plus per-object masks.",
    "tags": [],
    "meta": "Model Playground · CNN",
    "status": "Supported",
    "icon": "layers",
    "color": "#4884bd",
    "url": "https://github.com/Amlogic-NN/amlnn-model-playground/tree/main/examples/yolov5-seg/",
    "platforms": "A311D2 / S905X5 / A311Y3 / C305X2 / A123X",
    "descZh": "基于 YOLOv5 的实例分割：同时输出目标框与每个目标的掩码。",
    "thumb": "assets/models/yolov5-segmentation.webp"
  },
  {
    "section": "demos",
    "category": "Segmentation",
    "name": "YOLOv8 segmentation",
    "en": "Instance Segmentation · W8A8",
    "desc": "Instance segmentation built on YOLOv8, with the same export and post-processing flow.",
    "tags": [],
    "meta": "Model Playground · CNN",
    "status": "Supported",
    "icon": "layers",
    "color": "#4884bd",
    "url": "https://github.com/Amlogic-NN/amlnn-model-playground/tree/main/examples/yolov8-seg/",
    "platforms": "A311D2 / S905X5 / A311Y3 / C305X2 / A123X",
    "descZh": "基于 YOLOv8 的实例分割，导出与后处理流程一致。",
    "thumb": "assets/models/yolov8-segmentation.webp"
  },
  {
    "section": "demos",
    "category": "Detection",
    "name": "YOLOv8 OBB",
    "en": "Oriented Object Detection · W8A8",
    "desc": "Oriented bounding boxes for angled objects such as aerial or rotated views.",
    "tags": [],
    "meta": "Model Playground · CNN",
    "status": "Supported",
    "icon": "layers",
    "color": "#4884bd",
    "url": "https://github.com/Amlogic-NN/amlnn-model-playground/tree/main/examples/yolov8-obb/",
    "platforms": "A311D2 / S905X5 / A311Y3 / C305X2 / A123X",
    "descZh": "输出带旋转角的目标框，适用于航拍、倾斜视角等场景。",
    "thumb": "assets/models/yolov8-obb.webp"
  },
  {
    "section": "demos",
    "category": "Pose & Gesture",
    "name": "BlazePose detection",
    "en": "Pose Estimation · W8A8",
    "desc": "First stage of the BlazePose pipeline: finds the person and the region to crop.",
    "tags": [],
    "meta": "Model Playground · CNN",
    "status": "Supported",
    "icon": "layers",
    "color": "#4884bd",
    "url": "https://github.com/Amlogic-NN/amlnn-model-playground/tree/main/examples/blazepose_detect/",
    "platforms": "A311D2 / S905X5 / A311Y3 / C305X2 / A123X",
    "descZh": "BlazePose 流程的第一阶段：先找到人并给出待裁剪区域。",
    "thumb": "assets/models/blazepose-detection.webp"
  },
  {
    "section": "demos",
    "category": "Pose & Gesture",
    "name": "BlazePose landmark",
    "en": "Pose Estimation · W8A8",
    "desc": "Second stage of BlazePose: predicts 33 body landmarks from the cropped region.",
    "tags": [],
    "meta": "Model Playground · CNN",
    "status": "Supported",
    "icon": "layers",
    "color": "#4884bd",
    "url": "https://github.com/Amlogic-NN/amlnn-model-playground/tree/main/examples/blazepose_landmark/",
    "platforms": "A311D2 / S905X5 / A311Y3 / C305X2 / A123X",
    "descZh": "BlazePose 的第二阶段：在裁剪区域内预测 33 个人体关键点。",
    "thumb": "assets/models/blazepose-landmark.webp"
  },
  {
    "section": "demos",
    "category": "Pose & Gesture",
    "name": "YOLOv8 pose",
    "en": "Pose Estimation · W8A8",
    "desc": "Single-stage pose estimation — detect people and their keypoints in one pass.",
    "tags": [],
    "meta": "Model Playground · CNN",
    "status": "Supported",
    "icon": "layers",
    "color": "#4884bd",
    "url": "https://github.com/Amlogic-NN/amlnn-model-playground/tree/main/examples/yolov8-pose/",
    "platforms": "A311D2 / S905X5 / A311Y3 / C305X2 / A123X",
    "descZh": "单阶段姿态估计，一次推理同时得到人体框与关键点。",
    "thumb": "assets/models/yolov8-pose.webp"
  },
  {
    "section": "demos",
    "category": "License Plate Recognition",
    "name": "LPRNet",
    "en": "License Plate Recognition · W8A8",
    "desc": "License plate recognition: reads characters from a plate crop without a separate OCR step.",
    "tags": [],
    "meta": "Model Playground · CNN",
    "status": "Supported",
    "icon": "layers",
    "color": "#4884bd",
    "url": "https://github.com/Amlogic-NN/amlnn-model-playground/tree/main/examples/lprnet/",
    "platforms": "A311D2 / S905X5 / A311Y3 / C305X2 / A123X",
    "descZh": "车牌识别，直接从车牌区域读出字符，无需额外的 OCR 环节。",
    "thumb": "assets/models/lprnet.webp"
  },
  {
    "section": "demos",
    "category": "OCR",
    "name": "PaddleOCR detection",
    "en": "OCR Detection · W8A8",
    "desc": "Text detection stage only: returns text boxes, ready for a recogniser.",
    "tags": [],
    "meta": "Model Playground · CNN",
    "status": "Supported",
    "icon": "layers",
    "color": "#4884bd",
    "url": "https://github.com/Amlogic-NN/amlnn-model-playground/tree/main/examples/ppocr-det/",
    "platforms": "A311D2 / S905X5 / A311Y3 / C305X2 / A123X",
    "descZh": "仅做文本检测：输出文字框，交给识别模型使用。"
  },
  {
    "section": "demos",
    "category": "OCR",
    "name": "PaddleOCR detection v4",
    "en": "OCR Detection · W8A8",
    "desc": "PaddleOCR v4 text detector, tuned for dense scene text.",
    "tags": [],
    "meta": "Model Playground · CNN",
    "status": "Supported",
    "icon": "layers",
    "color": "#4884bd",
    "url": "https://github.com/Amlogic-NN/amlnn-model-playground/tree/main/examples/ppocr_det_v4/",
    "platforms": "A311D2 / S905X5 / A311Y3 / C305X2 / A123X",
    "descZh": "PaddleOCR v4 的文本检测模型，针对密集场景文字调优。",
    "thumb": "assets/models/paddleocr-detection-v4.webp"
  },
  {
    "section": "demos",
    "category": "OCR",
    "name": "PaddleOCR detection v5",
    "en": "OCR Detection · W8A8",
    "desc": "PaddleOCR v5 text detector — the newer of the two detector builds, same role.",
    "tags": [],
    "meta": "Model Playground · CNN",
    "status": "Supported",
    "icon": "layers",
    "color": "#4884bd",
    "url": "https://github.com/Amlogic-NN/amlnn-model-playground/tree/main/examples/ppocrv5-det/",
    "platforms": "A311D2 / S905X5 / A311Y3 / C305X2 / A123X",
    "descZh": "PaddleOCR v5 文本检测模型，两个检测版本中较新的一个，作用相同。"
  },
  {
    "section": "demos",
    "category": "OCR",
    "name": "PaddleOCR recognition v4",
    "en": "OCR Recognition · W8A16",
    "desc": "Text recognition stage only: turns text-line crops into strings.",
    "tags": [],
    "meta": "Model Playground · CNN",
    "status": "Supported",
    "icon": "layers",
    "color": "#4884bd",
    "url": "https://github.com/Amlogic-NN/amlnn-model-playground/tree/main/examples/ppocr_rec_v4/",
    "platforms": "A311Y3 / C305X2 / A123X",
    "descZh": "仅做文本识别：把文本行图像转换成字符串。"
  },
  {
    "section": "demos",
    "category": "OCR",
    "name": "PaddleOCR v4 detection + recognition",
    "en": "OCR System · W8A16",
    "desc": "Complete OCR pipeline (detect, crop, recognise) in one example.",
    "tags": [],
    "meta": "Model Playground · CNN",
    "status": "Supported",
    "icon": "layers",
    "color": "#4884bd",
    "url": "https://github.com/Amlogic-NN/amlnn-model-playground/tree/main/examples/ppocr_v4_system/",
    "platforms": "A311Y3 / C305X2 / A123X",
    "descZh": "完整的 OCR 流程（检测、裁剪、识别）打包在一个示例里。",
    "thumb": "assets/models/paddleocr-v4-detection-recognition.webp"
  },
  {
    "section": "demos",
    "category": "OCR",
    "name": "PP-OCRv5 system",
    "en": "OCR System · W8A16",
    "desc": "End-to-end OCR system at v5, with detection and recognition already wired together.",
    "tags": [],
    "meta": "Model Playground · CNN",
    "status": "Supported",
    "icon": "layers",
    "color": "#4884bd",
    "url": "https://github.com/Amlogic-NN/amlnn-model-playground/tree/main/examples/ppocrv5-system/",
    "platforms": "A311Y3 / C305X2 / A123X",
    "descZh": "PP-OCRv5 端到端 OCR 系统，检测与识别已经串好。",
    "thumb": "assets/models/pp-ocrv5-system.webp"
  },
  {
    "section": "demos",
    "category": "OCR",
    "name": "PP-OCRv6 system",
    "en": "OCR System · W8A16",
    "desc": "End-to-end OCR system at v6, the newer pipeline of the two.",
    "tags": [],
    "meta": "Model Playground · CNN",
    "status": "Supported",
    "icon": "layers",
    "color": "#4884bd",
    "url": "https://github.com/Amlogic-NN/amlnn-model-playground/tree/main/examples/ppocrv6-system/",
    "platforms": "A311Y3 / C305X2 / A123X",
    "descZh": "PP-OCRv6 端到端 OCR 系统，是两者中较新的一条流水线。",
    "thumb": "assets/models/pp-ocrv5-system.webp"
  },
  {
    "section": "demos",
    "category": "Audio",
    "name": "SenseVoice",
    "en": "Speech Recognition · W8A16",
    "desc": "Speech recognition for several languages, including Chinese and English.",
    "tags": [],
    "meta": "Model Playground · CNN",
    "status": "Supported",
    "icon": "mic",
    "color": "#4884bd",
    "url": "https://github.com/Amlogic-NN/amlnn-model-playground/tree/main/examples/sensevoice/",
    "platforms": "A311Y3 / C305X2 / A123X",
    "descZh": "多语种语音识别，覆盖中文、英文等常用语言。"
  },
  {
    "section": "demos",
    "category": "Audio",
    "name": "Whisper Tiny",
    "en": "Speech Recognition · W8A8",
    "desc": "Smallest Whisper variant for multilingual speech-to-text on constrained boards.",
    "tags": [],
    "meta": "Model Playground · CNN",
    "status": "Supported",
    "icon": "mic",
    "color": "#4884bd",
    "url": "https://github.com/Amlogic-NN/amlnn-model-playground/tree/main/examples/whisper/",
    "platforms": "A311D2 / S905X5 / A311Y3 / C305X2 / A123X",
    "descZh": "Whisper 系列中最小的一档，用于资源受限板卡上的多语种语音转文字。"
  },
  {
    "section": "demos",
    "category": "Image–Text",
    "name": "CLIP",
    "en": "Image-Text Matching · W8A16",
    "desc": "Image-text matching and zero-shot classification; the backbone behind many agents.",
    "tags": [],
    "meta": "Model Playground · CNN",
    "status": "Supported",
    "icon": "layers",
    "color": "#4884bd",
    "url": "https://github.com/Amlogic-NN/amlnn-model-playground/tree/main/examples/clip/",
    "platforms": "A311Y3 / C305X2 / A123X",
    "descZh": "图文匹配与零样本分类，也是很多 Agent 应用的底层模型。",
    "thumb": "assets/models/clip.webp"
  },
  {
    "section": "demos",
    "category": "Image–Text",
    "name": "MobileCLIP",
    "en": "Image-Text Matching · W8A16",
    "desc": "Mobile-sized CLIP: same matching task, a fraction of the compute.",
    "tags": [],
    "meta": "Model Playground · CNN",
    "status": "Supported",
    "icon": "layers",
    "color": "#4884bd",
    "url": "https://github.com/Amlogic-NN/amlnn-model-playground/tree/main/examples/mobileclip/",
    "platforms": "A311Y3 / C305X2 / A123X",
    "descZh": "移动端尺寸的 CLIP：同样的图文匹配任务，算力开销小得多。",
    "thumb": "assets/models/clip.webp"
  },
  {
    "section": "demos",
    "category": "LLM",
    "name": "DeepSeek-R1-1.5B",
    "en": "LLM · W4A16",
    "desc": "Reasoning-tuned 1.5B model; answers show a thinking trace before the final reply.",
    "tags": [],
    "meta": "Model Playground · LLM",
    "status": "Supported",
    "icon": "code",
    "color": "#8f7cbe",
    "url": "https://github.com/Amlogic-NN/amlnn-model-playground/tree/main/examples/LLMs",
    "platforms": "A311Y3 / C305X2 / A123X",
    "descZh": "推理微调的 1.5B 模型，回答前会先给出思考过程。",
    "perf": {
      "speed": 22.7,
      "ttft": 105,
      "memory": 1269
    }
  },
  {
    "section": "demos",
    "category": "LLM",
    "name": "Qwen-1.8B",
    "en": "LLM · W4A16",
    "desc": "Qwen 1.8B chat model, the first Qwen generation.",
    "tags": [],
    "meta": "Model Playground · LLM",
    "status": "Supported",
    "icon": "code",
    "color": "#8f7cbe",
    "url": "https://github.com/Amlogic-NN/amlnn-model-playground/tree/main/examples/LLMs",
    "platforms": "A311Y3 / C305X2 / A123X",
    "descZh": "Qwen 第一代 1.8B 对话模型。",
    "perf": {
      "speed": 20.2,
      "ttft": 129,
      "memory": 1635
    }
  },
  {
    "section": "demos",
    "category": "LLM",
    "name": "Qwen1.5-0.5B",
    "en": "LLM · W4A16",
    "desc": "Qwen1.5 0.5B — the lightest option when memory is the hard limit.",
    "tags": [],
    "meta": "Model Playground · LLM",
    "status": "Supported",
    "icon": "code",
    "color": "#8f7cbe",
    "url": "https://github.com/Amlogic-NN/amlnn-model-playground/tree/main/examples/LLMs",
    "platforms": "A311Y3 / C305X2 / A123X",
    "descZh": "Qwen1.5 0.5B，内存最紧张时的选择。",
    "perf": {
      "speed": 59.3,
      "ttft": 40,
      "memory": 645
    }
  },
  {
    "section": "demos",
    "category": "LLM",
    "name": "Qwen1.5-1.8B",
    "en": "LLM · W4A16",
    "desc": "Qwen1.5 1.8B: better answers than 0.5B at roughly double the memory.",
    "tags": [],
    "meta": "Model Playground · LLM",
    "status": "Supported",
    "icon": "code",
    "color": "#8f7cbe",
    "url": "https://github.com/Amlogic-NN/amlnn-model-playground/tree/main/examples/LLMs",
    "platforms": "A311Y3 / C305X2 / A123X",
    "descZh": "Qwen1.5 1.8B：效果比 0.5B 好，内存占用约为其两倍。",
    "perf": {
      "speed": 21.5,
      "ttft": 120,
      "memory": 1575
    }
  },
  {
    "section": "demos",
    "category": "LLM",
    "name": "Qwen2-0.5B",
    "en": "LLM · W4A16",
    "desc": "Qwen2 0.5B chat model with improved multilingual ability over Qwen1.5.",
    "tags": [],
    "meta": "Model Playground · LLM",
    "status": "Supported",
    "icon": "code",
    "color": "#8f7cbe",
    "url": "https://github.com/Amlogic-NN/amlnn-model-playground/tree/main/examples/LLMs",
    "platforms": "A311Y3 / C305X2 / A123X",
    "descZh": "Qwen2 0.5B 对话模型，多语言能力较 Qwen1.5 有提升。",
    "perf": {
      "speed": 63.6,
      "ttft": 44,
      "memory": 403
    }
  },
  {
    "section": "demos",
    "category": "LLM",
    "name": "Qwen2-1.5B",
    "en": "LLM · W4A16",
    "desc": "Qwen2 1.5B: the mid-size option in the Qwen2 family.",
    "tags": [],
    "meta": "Model Playground · LLM",
    "status": "Supported",
    "icon": "code",
    "color": "#8f7cbe",
    "url": "https://github.com/Amlogic-NN/amlnn-model-playground/tree/main/examples/LLMs",
    "platforms": "A311Y3 / C305X2 / A123X",
    "descZh": "Qwen2 1.5B，Qwen2 家族里的中等尺寸选择。",
    "perf": {
      "speed": 22.9,
      "ttft": 113,
      "memory": 1075
    }
  },
  {
    "section": "demos",
    "category": "LLM",
    "name": "Qwen2.5-0.5B",
    "en": "LLM · W4A16",
    "desc": "Qwen2.5 0.5B, commonly used as the first chat model on an A311Y3 board.",
    "tags": [],
    "meta": "Model Playground · LLM",
    "status": "Supported",
    "icon": "code",
    "color": "#8f7cbe",
    "url": "https://github.com/Amlogic-NN/amlnn-model-playground/tree/main/examples/LLMs",
    "platforms": "A311Y3 / C305X2 / A123X",
    "descZh": "Qwen2.5 0.5B，常被用作 A311Y3 板卡上的第一个对话模型。",
    "perf": {
      "speed": 63.5,
      "ttft": 44,
      "memory": 476
    }
  },
  {
    "section": "demos",
    "category": "LLM",
    "name": "Qwen2.5-1.5B",
    "en": "LLM · W4A16",
    "desc": "Qwen2.5 1.5B: steadier multi-turn answers than the 0.5B build.",
    "tags": [],
    "meta": "Model Playground · LLM",
    "status": "Supported",
    "icon": "code",
    "color": "#8f7cbe",
    "url": "https://github.com/Amlogic-NN/amlnn-model-playground/tree/main/examples/LLMs",
    "platforms": "A311Y3 / C305X2 / A123X",
    "descZh": "Qwen2.5 1.5B：多轮对话比 0.5B 版本更稳。",
    "perf": {
      "speed": 22.8,
      "ttft": 117,
      "memory": 1075
    }
  },
  {
    "section": "demos",
    "category": "LLM",
    "name": "Qwen2.5-3B",
    "en": "LLM · W4A16",
    "desc": "Qwen2.5 3B, the largest Qwen2.5 build listed here; needs more DDR.",
    "tags": [],
    "meta": "Model Playground · LLM",
    "status": "Supported",
    "icon": "code",
    "color": "#8f7cbe",
    "url": "https://github.com/Amlogic-NN/amlnn-model-playground/tree/main/examples/LLMs",
    "platforms": "A311Y3 / C305X2 / A123X",
    "descZh": "Qwen2.5 3B，此处 Qwen2.5 系列最大的一档，需要更多内存。",
    "perf": {
      "speed": 11.9,
      "ttft": 211,
      "memory": 2022
    }
  },
  {
    "section": "demos",
    "category": "LLM",
    "name": "Qwen3-0.6B",
    "en": "LLM · W4A16",
    "desc": "Qwen3 0.6B with hybrid thinking mode; can answer directly or show reasoning.",
    "tags": [],
    "meta": "Model Playground · LLM",
    "status": "Supported",
    "icon": "code",
    "color": "#8f7cbe",
    "url": "https://github.com/Amlogic-NN/amlnn-model-playground/tree/main/examples/LLMs",
    "platforms": "A311Y3 / C305X2 / A123X",
    "descZh": "Qwen3 0.6B，支持混合思考模式，可直答也可展示推理过程。",
    "perf": {
      "speed": 47.9,
      "ttft": 57,
      "memory": 780
    }
  },
  {
    "section": "demos",
    "category": "LLM",
    "name": "Qwen3-1.7B",
    "en": "LLM · W4A16",
    "desc": "Qwen3 1.7B: better reasoning than 0.6B, at a higher memory cost.",
    "tags": [],
    "meta": "Model Playground · LLM",
    "status": "Supported",
    "icon": "code",
    "color": "#8f7cbe",
    "url": "https://github.com/Amlogic-NN/amlnn-model-playground/tree/main/examples/LLMs",
    "platforms": "A311Y3 / C305X2 / A123X",
    "descZh": "Qwen3 1.7B：推理能力优于 0.6B，内存开销也更高。",
    "perf": {
      "speed": 20.1,
      "ttft": 133,
      "memory": 1541
    }
  },
  {
    "section": "demos",
    "category": "LLM",
    "name": "Qwen3-4B",
    "en": "LLM · W4A16",
    "desc": "Qwen3 4B, the largest Qwen3 build here; expect higher latency.",
    "tags": [],
    "meta": "Model Playground · LLM",
    "status": "Supported",
    "icon": "code",
    "color": "#8f7cbe",
    "url": "https://github.com/Amlogic-NN/amlnn-model-playground/tree/main/examples/LLMs",
    "platforms": "A311Y3 / C305X2 / A123X",
    "descZh": "Qwen3 4B，此处 Qwen3 最大的一档，延迟也更高。",
    "perf": {
      "speed": 9.0,
      "ttft": 278,
      "memory": 2843
    }
  },
  {
    "section": "demos",
    "category": "LLM",
    "name": "TinyLlama0.4-1.1B",
    "en": "LLM · W4A16",
    "desc": "TinyLlama 1.1B pretrained checkpoint (v0.4); base model, not chat-tuned.",
    "tags": [],
    "meta": "Model Playground · LLM",
    "status": "Supported",
    "icon": "code",
    "color": "#8f7cbe",
    "url": "https://github.com/Amlogic-NN/amlnn-model-playground/tree/main/examples/LLMs",
    "platforms": "A311Y3 / C305X2 / A123X",
    "descZh": "TinyLlama 1.1B 预训练权重（v0.4），是基座模型，未做对话微调。",
    "perf": {
      "speed": 34.6,
      "ttft": 77,
      "memory": 772
    }
  },
  {
    "section": "demos",
    "category": "LLM",
    "name": "TinyLlama1-1.1B",
    "en": "LLM · W4A16",
    "desc": "TinyLlama 1.1B (v1.0), the updated pretrained checkpoint.",
    "tags": [],
    "meta": "Model Playground · LLM",
    "status": "Supported",
    "icon": "code",
    "color": "#8f7cbe",
    "url": "https://github.com/Amlogic-NN/amlnn-model-playground/tree/main/examples/LLMs",
    "platforms": "A311Y3 / C305X2 / A123X",
    "descZh": "TinyLlama 1.1B（v1.0），更新后的预训练权重。",
    "perf": {
      "speed": 34.5,
      "ttft": 77,
      "memory": 772
    }
  },
  {
    "section": "demos",
    "category": "LLM",
    "name": "Llama2-7B",
    "en": "LLM · W4A16",
    "desc": "Llama 2 7B chat model — large for an edge board; useful mainly as a reference point.",
    "tags": [],
    "meta": "Model Playground · LLM",
    "status": "Supported",
    "icon": "code",
    "color": "#8f7cbe",
    "url": "https://github.com/Amlogic-NN/amlnn-model-playground/tree/main/examples/LLMs",
    "platforms": "A311Y3 / C305X2 / A123X",
    "descZh": "Llama 2 7B 对话模型，对端侧板卡来说偏大，更多作为参考。",
    "perf": {
      "speed": 5.4,
      "ttft": 465,
      "memory": 5218
    }
  },
  {
    "section": "demos",
    "category": "LLM",
    "name": "Llama3.2-1B",
    "en": "LLM · W4A16",
    "desc": "Llama 3.2 1B instruct model, tuned for short on-device conversations.",
    "tags": [],
    "meta": "Model Playground · LLM",
    "status": "Supported",
    "icon": "code",
    "color": "#8f7cbe",
    "url": "https://github.com/Amlogic-NN/amlnn-model-playground/tree/main/examples/LLMs",
    "platforms": "A311Y3 / C305X2 / A123X",
    "descZh": "Llama 3.2 1B 指令模型，适合端侧短对话场景。",
    "perf": {
      "speed": 27.4,
      "ttft": 95,
      "memory": 953
    }
  },
  {
    "section": "demos",
    "category": "LLM",
    "name": "Llama3.2-3B",
    "en": "LLM · W4A16",
    "desc": "Llama 3.2 3B: stronger general ability than the 1B build, heavier memory.",
    "tags": [],
    "meta": "Model Playground · LLM",
    "status": "Supported",
    "icon": "code",
    "color": "#8f7cbe",
    "url": "https://github.com/Amlogic-NN/amlnn-model-playground/tree/main/examples/LLMs",
    "platforms": "A311Y3 / C305X2 / A123X",
    "descZh": "Llama 3.2 3B：通用能力强于 1B 版本，内存占用更高。",
    "perf": {
      "speed": 11.2,
      "ttft": 261,
      "memory": 2348
    }
  },
  {
    "section": "demos",
    "category": "LLM",
    "name": "OpenLLaMA-3B",
    "en": "LLM · W4A16",
    "desc": "OpenLLaMA 3B, an open reproduction of the LLaMA recipe.",
    "tags": [],
    "meta": "Model Playground · LLM",
    "status": "Supported",
    "icon": "code",
    "color": "#8f7cbe",
    "url": "https://github.com/Amlogic-NN/amlnn-model-playground/tree/main/examples/LLMs",
    "platforms": "A311Y3 / C305X2 / A123X",
    "descZh": "OpenLLaMA 3B，LLaMA 训练方案的开放复现版本。",
    "perf": {
      "speed": 9.7,
      "ttft": 419,
      "memory": 2865
    }
  },
  {
    "section": "demos",
    "category": "LLM",
    "name": "Gemma1-2B",
    "en": "LLM · W4A16",
    "desc": "Gemma 2B (first generation) from Google, instruction-tuned.",
    "tags": [],
    "meta": "Model Playground · LLM",
    "status": "Supported",
    "icon": "code",
    "color": "#8f7cbe",
    "url": "https://github.com/Amlogic-NN/amlnn-model-playground/tree/main/examples/LLMs",
    "platforms": "A311Y3 / C305X2 / A123X",
    "descZh": "Google Gemma 第一代 2B，指令微调版本。",
    "perf": {
      "speed": 14.1,
      "ttft": 147,
      "memory": 1836
    }
  },
  {
    "section": "demos",
    "category": "LLM",
    "name": "Gemma2-2B",
    "en": "LLM · W4A16",
    "desc": "Gemma 2 2B, with better multilingual answers than the first generation.",
    "tags": [],
    "meta": "Model Playground · LLM",
    "status": "Supported",
    "icon": "code",
    "color": "#8f7cbe",
    "url": "https://github.com/Amlogic-NN/amlnn-model-playground/tree/main/examples/LLMs",
    "platforms": "A311Y3 / C305X2 / A123X",
    "descZh": "Gemma 2 2B，多语言回答质量优于第一代。",
    "perf": {
      "speed": 12.9,
      "ttft": 177,
      "memory": 2130
    }
  },
  {
    "section": "demos",
    "category": "LLM",
    "name": "Gemma3-270M",
    "en": "LLM · W4A16",
    "desc": "Gemma 3 270M — the smallest model here; suited to classification-style prompts.",
    "tags": [],
    "meta": "Model Playground · LLM",
    "status": "Supported",
    "icon": "code",
    "color": "#8f7cbe",
    "url": "https://github.com/Amlogic-NN/amlnn-model-playground/tree/main/examples/LLMs",
    "platforms": "A311Y3 / C305X2 / A123X",
    "descZh": "Gemma 3 270M，此处最小的模型，适合分类式短任务。",
    "perf": {
      "speed": 86.4,
      "ttft": 51,
      "memory": 656
    }
  },
  {
    "section": "demos",
    "category": "LLM",
    "name": "Gemma3-1B",
    "en": "LLM · W4A16",
    "desc": "Gemma 3 1B: small enough for 4 GB boards, stronger than the 270M build.",
    "tags": [],
    "meta": "Model Playground · LLM",
    "status": "Supported",
    "icon": "code",
    "color": "#8f7cbe",
    "url": "https://github.com/Amlogic-NN/amlnn-model-playground/tree/main/examples/LLMs",
    "platforms": "A311Y3 / C305X2 / A123X",
    "descZh": "Gemma 3 1B：4 GB 板卡也能跑，效果强于 270M 版本。",
    "perf": {
      "speed": 30.6,
      "ttft": 98,
      "memory": 1147
    }
  },
  {
    "section": "demos",
    "category": "LLM",
    "name": "Gemma4-E2B",
    "en": "LLM · W4A16",
    "desc": "Gemma 4 E2B (effective 2B parameters), the smaller of the two Gemma 4 entries.",
    "tags": [],
    "meta": "Model Playground · LLM",
    "status": "Supported",
    "icon": "code",
    "color": "#8f7cbe",
    "url": "https://github.com/Amlogic-NN/amlnn-model-playground/tree/main/examples/LLMs",
    "platforms": "A311Y3 / C305X2 / A123X",
    "descZh": "Gemma 4 E2B（等效 2B 参数），两个 Gemma 4 条目中较小的一个。",
    "perf": {
      "speed": 16.6,
      "ttft": 207,
      "memory": 3542
    }
  },
  {
    "section": "demos",
    "category": "LLM",
    "name": "Gemma4-E4B",
    "en": "LLM · W4A16",
    "desc": "Gemma 4 E4B (effective 4B parameters), the larger Gemma 4 entry.",
    "tags": [],
    "meta": "Model Playground · LLM",
    "status": "Supported",
    "icon": "code",
    "color": "#8f7cbe",
    "url": "https://github.com/Amlogic-NN/amlnn-model-playground/tree/main/examples/LLMs",
    "platforms": "A311Y3 / C305X2 / A123X",
    "descZh": "Gemma 4 E4B（等效 4B 参数），Gemma 4 中较大的一个。",
    "perf": {
      "speed": 8.4,
      "ttft": 345,
      "memory": 5777
    }
  },
  {
    "section": "demos",
    "category": "LLM",
    "name": "Phi1.5-1.3B",
    "en": "LLM · W4A16",
    "desc": "Phi-1.5 1.3B, a small model trained mainly on textbook-quality text.",
    "tags": [],
    "meta": "Model Playground · LLM",
    "status": "Supported",
    "icon": "code",
    "color": "#8f7cbe",
    "url": "https://github.com/Amlogic-NN/amlnn-model-playground/tree/main/examples/LLMs",
    "platforms": "A311Y3 / C305X2 / A123X",
    "descZh": "Phi-1.5 1.3B，主要以教科书级语料训练的小模型。",
    "perf": {
      "speed": 23.9,
      "ttft": 137,
      "memory": 1405
    }
  },
  {
    "section": "demos",
    "category": "LLM",
    "name": "Phi2-2.7B",
    "en": "LLM · W4A16",
    "desc": "Phi-2 2.7B with stronger reasoning for its size.",
    "tags": [],
    "meta": "Model Playground · LLM",
    "status": "Supported",
    "icon": "code",
    "color": "#8f7cbe",
    "url": "https://github.com/Amlogic-NN/amlnn-model-playground/tree/main/examples/LLMs",
    "platforms": "A311Y3 / C305X2 / A123X",
    "descZh": "Phi-2 2.7B，在同尺寸中推理能力较强。",
    "perf": {
      "speed": 11.8,
      "ttft": 310,
      "memory": 2605
    }
  },
  {
    "section": "demos",
    "category": "LLM",
    "name": "Phi3-3.8B",
    "en": "LLM · W4A16",
    "desc": "Phi-3 3.8B, the largest Phi build here.",
    "tags": [],
    "meta": "Model Playground · LLM",
    "status": "Supported",
    "icon": "code",
    "color": "#8f7cbe",
    "url": "https://github.com/Amlogic-NN/amlnn-model-playground/tree/main/examples/LLMs",
    "platforms": "A311Y3 / C305X2 / A123X",
    "descZh": "Phi-3 3.8B，此处 Phi 系列最大的一档。",
    "perf": {
      "speed": 8.7,
      "ttft": 388,
      "memory": 3401
    }
  },
  {
    "section": "demos",
    "category": "LLM",
    "name": "ChatGLM3-6B",
    "en": "LLM · W4A16",
    "desc": "ChatGLM3 6B, a Chinese/English chat model; one of the heavier builds here.",
    "tags": [],
    "meta": "Model Playground · LLM",
    "status": "Supported",
    "icon": "code",
    "color": "#8f7cbe",
    "url": "https://github.com/Amlogic-NN/amlnn-model-playground/tree/main/examples/LLMs",
    "platforms": "A311Y3 / C305X2 / A123X",
    "descZh": "ChatGLM3 6B，中英双语对话模型，属于此处较重的几档。",
    "perf": {
      "speed": 6.2,
      "ttft": 350,
      "memory": 4049
    }
  },
  {
    "section": "demos",
    "category": "LLM",
    "name": "MiniCPM3-4B",
    "en": "LLM · W4A16",
    "desc": "MiniCPM3 4B, a Chinese and English chat model at a moderate size.",
    "tags": [],
    "meta": "Model Playground · LLM",
    "status": "Supported",
    "icon": "code",
    "color": "#8f7cbe",
    "url": "https://github.com/Amlogic-NN/amlnn-model-playground/tree/main/examples/LLMs",
    "platforms": "A311Y3 / C305X2 / A123X",
    "descZh": "MiniCPM3 4B，中英双语对话模型，体量适中。",
    "perf": {
      "speed": 7.5,
      "ttft": 469,
      "memory": 4434
    }
  },
  {
    "section": "demos",
    "category": "LLM",
    "name": "MiniCPM4-0.5B",
    "en": "LLM · W4A16",
    "desc": "MiniCPM4 0.5B, a compact Chinese-first chat model.",
    "tags": [],
    "meta": "Model Playground · LLM",
    "status": "Supported",
    "icon": "code",
    "color": "#8f7cbe",
    "url": "https://github.com/Amlogic-NN/amlnn-model-playground/tree/main/examples/LLMs",
    "platforms": "A311Y3 / C305X2 / A123X",
    "descZh": "MiniCPM4 0.5B，紧凑的中文优先对话模型。",
    "perf": {
      "speed": 72.9,
      "ttft": 53,
      "memory": 395
    }
  },
  {
    "section": "demos",
    "category": "VLM",
    "name": "InternVL2-1B",
    "en": "VLM · W4A16",
    "desc": "Vision-language model at 1B: describe an image or answer questions about it.",
    "tags": [],
    "meta": "Model Playground · VLM",
    "status": "Supported",
    "icon": "eye",
    "color": "#4ca29b",
    "url": "https://github.com/Amlogic-NN/amlnn-model-playground/tree/main/examples/LLMs",
    "platforms": "A311Y3 / C305X2 / A123X",
    "descZh": "1B 规模的视觉语言模型，可描述图片或回答与图片相关的问题。",
    "perf": {
      "speed": 12.6,
      "ttft": 230,
      "memory": 527
    }
  },
  {
    "section": "demos",
    "category": "VLM",
    "name": "InternVL3-1B",
    "en": "VLM · W4A16",
    "desc": "InternVL3 1B, the newer generation of the 1B vision-language model.",
    "tags": [],
    "meta": "Model Playground · VLM",
    "status": "Supported",
    "icon": "eye",
    "color": "#4ca29b",
    "url": "https://github.com/Amlogic-NN/amlnn-model-playground/tree/main/examples/LLMs",
    "platforms": "A311Y3 / C305X2 / A123X",
    "descZh": "InternVL3 1B，1B 视觉语言模型的新一代。",
    "perf": {
      "speed": 12.4,
      "ttft": 110,
      "memory": 527
    }
  },
  {
    "section": "demos",
    "category": "VLM",
    "name": "Qwen-VL2-2B",
    "en": "VLM · W4A16",
    "desc": "Qwen2-VL 2B: image understanding with the Qwen chat interface.",
    "tags": [],
    "meta": "Model Playground · VLM",
    "status": "Supported",
    "icon": "eye",
    "color": "#4ca29b",
    "url": "https://github.com/Amlogic-NN/amlnn-model-playground/tree/main/examples/LLMs",
    "platforms": "A311Y3 / C305X2 / A123X",
    "descZh": "Qwen2-VL 2B：沿用 Qwen 对话接口的图像理解模型。",
    "perf": {
      "speed": 22.9,
      "ttft": 113,
      "memory": 1315
    }
  },
  {
    "section": "demos",
    "category": "VLM",
    "name": "Qwen-VL2.5-3B",
    "en": "VLM · W4A16",
    "desc": "Qwen2.5-VL 3B, the larger of the two Qwen2.5-VL builds.",
    "tags": [],
    "meta": "Model Playground · VLM",
    "status": "Supported",
    "icon": "eye",
    "color": "#4ca29b",
    "url": "https://github.com/Amlogic-NN/amlnn-model-playground/tree/main/examples/LLMs",
    "platforms": "A311Y3 / C305X2 / A123X",
    "descZh": "Qwen2.5-VL 3B，两个 Qwen2.5-VL 版本中较大的一个。",
    "perf": {
      "speed": 11.9,
      "ttft": 214,
      "memory": 2346
    }
  },
  {
    "section": "demos",
    "category": "VLM",
    "name": "Qwen-VL3-2B",
    "en": "VLM · W4A16",
    "desc": "Qwen3-VL 2B, the smaller of the two Qwen3 vision-language entries.",
    "tags": [],
    "meta": "Model Playground · VLM",
    "status": "Supported",
    "icon": "eye",
    "color": "#4ca29b",
    "url": "https://github.com/Amlogic-NN/amlnn-model-playground/tree/main/examples/LLMs",
    "platforms": "A311Y3 / C305X2 / A123X",
    "descZh": "Qwen3-VL 2B，两个 Qwen3 视觉语言条目中较小的一个。",
    "perf": {
      "speed": 16.4,
      "ttft": 169,
      "memory": 1704
    }
  },
  {
    "section": "demos",
    "category": "VLM",
    "name": "Qwen-VL3-4B",
    "en": "VLM · W4A16",
    "desc": "Qwen3-VL 4B, the larger Qwen3 vision-language entry.",
    "tags": [],
    "meta": "Model Playground · VLM",
    "status": "Supported",
    "icon": "eye",
    "color": "#4ca29b",
    "url": "https://github.com/Amlogic-NN/amlnn-model-playground/tree/main/examples/LLMs",
    "platforms": "A311Y3 / C305X2 / A123X",
    "descZh": "Qwen3-VL 4B，Qwen3 视觉语言条目中较大的一个。",
    "perf": {
      "speed": 7.8,
      "ttft": 349,
      "memory": 3259
    }
  },
  {
    "section": "demos",
    "category": "VLM",
    "name": "MobileVLM-V2-1.7B",
    "en": "VLM · W4A16",
    "desc": "MobileVLM V2 1.7B, designed for phone-class hardware.",
    "tags": [],
    "meta": "Model Playground · VLM",
    "status": "Supported",
    "icon": "eye",
    "color": "#4ca29b",
    "url": "https://github.com/Amlogic-NN/amlnn-model-playground/tree/main/examples/LLMs",
    "platforms": "A311Y3 / C305X2 / A123X",
    "descZh": "MobileVLM V2 1.7B，面向手机级硬件设计。",
    "perf": {
      "speed": 15.1,
      "ttft": 139,
      "memory": 1331
    }
  },
  {
    "section": "demos",
    "category": "VLM",
    "name": "MiniCPM-V2.6-8B",
    "en": "VLM · W4A16",
    "desc": "MiniCPM-V 2.6 8B, the largest vision-language model here.",
    "tags": [],
    "meta": "Model Playground · VLM",
    "status": "Supported",
    "icon": "eye",
    "color": "#4ca29b",
    "url": "https://github.com/Amlogic-NN/amlnn-model-playground/tree/main/examples/LLMs",
    "platforms": "A311Y3 / C305X2 / A123X",
    "descZh": "MiniCPM-V 2.6 8B，此处体量最大的视觉语言模型。",
    "perf": {
      "speed": 2.1,
      "ttft": 604,
      "memory": 4878
    }
  },
  {
    "section": "start",
    "category": "Getting Started",
    "name": "NPU Quick Start",
    "en": "PDF · v0.1",
    "desc": "Step-by-step first run: environment check, YOLOX conversion, on-board inference and result validation.",
    "tags": [
      "PDF",
      "v0.1"
    ],
    "meta": "Amlogic NN Toolkit",
    "status": "PDF Guide",
    "icon": "book",
    "color": "#4884bd",
    "url": "",
    "links": [
      {
        "label": "English",
        "url": "https://github.com/Amlogic-NN/amlnn-toolkit/blob/main/doc/01_Amlogic_NPU_Quick_Start_guide_V0.1.pdf"
      },
      {
        "label": "中文",
        "url": "https://github.com/Amlogic-NN/amlnn-toolkit/blob/main/doc/01_Amlogic_NPU_Quick_Start_guide_CN_V0.1.pdf"
      }
    ]
  },
  {
    "section": "start",
    "category": "Guides",
    "name": "NPU User Guide",
    "en": "PDF · v0.1",
    "desc": "How the toolkit, runtimes and NPU driver fit together, with the full conversion and deployment workflow.",
    "tags": [
      "PDF",
      "v0.1"
    ],
    "meta": "Amlogic NN Toolkit",
    "status": "PDF Guide",
    "icon": "book",
    "color": "#4884bd",
    "url": "",
    "links": [
      {
        "label": "English",
        "url": "https://github.com/Amlogic-NN/amlnn-toolkit/blob/main/doc/02_Amlogic_NPU_User_Guide_V0.1.pdf"
      },
      {
        "label": "中文",
        "url": "https://github.com/Amlogic-NN/amlnn-toolkit/blob/main/doc/02_Amlogic_NPU_User_Guide_CN_V0.1.pdf"
      }
    ]
  },
  {
    "section": "start",
    "category": "API Reference",
    "name": "AMLNN API Reference",
    "en": "PDF · v0.1",
    "desc": "API reference for the AMLNN runtime: model loading, tensor input, inference calls and output handling.",
    "tags": [
      "PDF",
      "v0.1"
    ],
    "meta": "Amlogic NN Toolkit",
    "status": "PDF Guide",
    "icon": "book",
    "color": "#4884bd",
    "url": "",
    "links": [
      {
        "label": "English",
        "url": "https://github.com/Amlogic-NN/amlnn-toolkit/blob/main/doc/03_Amlogic_NPU_API_Reference_AMLNN_V0.1.pdf"
      },
      {
        "label": "中文",
        "url": "https://github.com/Amlogic-NN/amlnn-toolkit/blob/main/doc/03_Amlogic_NPU_API_Reference_AMLNN_CN_V0.1.pdf"
      }
    ]
  },
  {
    "section": "start",
    "category": "API Reference",
    "name": "NNSDK2 API Reference",
    "en": "PDF · v0.1",
    "desc": "Native C API reference for NNSDK2, the runtime behind board-side C/C++ applications.",
    "tags": [
      "PDF",
      "v0.1"
    ],
    "meta": "Amlogic NN Toolkit",
    "status": "PDF Guide",
    "icon": "book",
    "color": "#4884bd",
    "url": "",
    "links": [
      {
        "label": "English",
        "url": "https://github.com/Amlogic-NN/amlnn-toolkit/blob/main/doc/04_Amlogic_NPU_API_Reference_NNSDK2_V0.1.pdf"
      },
      {
        "label": "中文",
        "url": "https://github.com/Amlogic-NN/amlnn-toolkit/blob/main/doc/04_Amlogic_NPU_API_Reference_NNSDK2_CN_V0.1.pdf"
      }
    ]
  },
  {
    "section": "start",
    "category": "Operators",
    "name": "Supported Operator List",
    "en": "PDF · v0.1",
    "desc": "Operators supported by each NPU generation — check coverage before converting a model.",
    "tags": [
      "PDF",
      "v0.1"
    ],
    "meta": "Amlogic NN Toolkit",
    "status": "PDF Guide",
    "icon": "book",
    "color": "#4884bd",
    "url": "",
    "links": [
      {
        "label": "English",
        "url": "https://github.com/Amlogic-NN/amlnn-toolkit/blob/main/doc/05_Amlogic_NPU_Support_Operator_List_V0.1.pdf"
      },
      {
        "label": "中文",
        "url": "https://github.com/Amlogic-NN/amlnn-toolkit/blob/main/doc/05_Amlogic_NPU_Support_Operator_List_CN_V0.1.pdf"
      }
    ]
  },
  {
    "section": "start",
    "category": "Deployment",
    "name": "Android Deployment Guide",
    "en": "PDF · v0.1",
    "desc": "Build and push an inference binary to an Android board over ADB, including ABI and library placement.",
    "tags": [
      "PDF",
      "v0.1"
    ],
    "meta": "Amlogic NN Toolkit",
    "status": "PDF Guide",
    "icon": "book",
    "color": "#4884bd",
    "url": "",
    "links": [
      {
        "label": "English",
        "url": "https://github.com/Amlogic-NN/amlnn-toolkit/blob/main/doc/06_Amlogic_NPU_Android_Deployment_Guide_V0.1.pdf"
      },
      {
        "label": "中文",
        "url": "https://github.com/Amlogic-NN/amlnn-toolkit/blob/main/doc/06_Amlogic_NPU_Android_Deployment_Guide_CN_V0.1.pdf"
      }
    ]
  },
  {
    "section": "start",
    "category": "Integration",
    "name": "LiteRT Guide",
    "en": "PDF · v0.1",
    "desc": "Run models through LiteRT / NNAPI on Amlogic NPUs, including the operator subset that is supported.",
    "tags": [
      "PDF",
      "v0.1"
    ],
    "meta": "Amlogic NN Toolkit",
    "status": "PDF Guide",
    "icon": "book",
    "color": "#4884bd",
    "url": "",
    "links": [
      {
        "label": "English",
        "url": "https://github.com/Amlogic-NN/amlnn-toolkit/blob/main/doc/07_Amlogic_NPU_LiteRT_V0.1.pdf"
      },
      {
        "label": "中文",
        "url": "https://github.com/Amlogic-NN/amlnn-toolkit/blob/main/doc/07_Amlogic_NPU_LiteRT_CN_V0.1.pdf"
      }
    ]
  },
  {
    "section": "start",
    "category": "Quantization",
    "name": "Quantization Guide",
    "en": "PDF · v0.1",
    "desc": "Prepare calibration data, choose w8a8 or w4a16, and verify what quantization did to accuracy.",
    "tags": [
      "PDF",
      "v0.1"
    ],
    "meta": "Amlogic NN Toolkit",
    "status": "PDF Guide",
    "icon": "book",
    "color": "#4884bd",
    "url": "",
    "links": [
      {
        "label": "English",
        "url": "https://github.com/Amlogic-NN/amlnn-toolkit/blob/main/doc/08_Amlogic_NPU_Quantization_Guide_V0.1.pdf"
      },
      {
        "label": "中文",
        "url": "https://github.com/Amlogic-NN/amlnn-toolkit/blob/main/doc/08_Amlogic_NPU_Quantization_Guide_CN_V0.1.pdf"
      }
    ]
  },
  {
    "section": "start",
    "category": "LLM",
    "name": "LLM User Guide",
    "en": "PDF · v0.3",
    "desc": "Run LLMs and VLMs on the board: model packages, Python and C/C++ examples, generation settings and checks.",
    "tags": [
      "PDF",
      "v0.3"
    ],
    "meta": "Amlogic NN Toolkit",
    "status": "PDF Guide",
    "icon": "book",
    "color": "#4884bd",
    "url": "",
    "links": [
      {
        "label": "English",
        "url": "https://github.com/Amlogic-NN/amlnn-toolkit/blob/main/doc/09_Amlogic_NPU_LLM_User_Guide_V0.3.pdf"
      },
      {
        "label": "中文",
        "url": "https://github.com/Amlogic-NN/amlnn-toolkit/blob/main/doc/09_Amlogic_NPU_LLM_User_Guide_CN_V0.3.pdf"
      }
    ]
  },
  {
    "section": "start",
    "category": "SDK Documentation",
    "name": "Amlogic NN Toolkit · Documentation",
    "en": "Conversion · Quantization · Compilation · Inference",
    "desc": "A full toolchain for model conversion, quantization, compilation and inference. See component documentation for installation and platform support.",
    "tags": [
      "Python",
      "CNN",
      "LLM",
      "NPU"
    ],
    "meta": "GitHub Repository",
    "status": "Repository",
    "icon": "code",
    "color": "#4884bd",
    "url": "https://github.com/Amlogic-NN/amlnn-toolkit/blob/main/amlnn_toolkit/readme.md"
  },
  {
    "section": "start",
    "category": "SDK Documentation",
    "name": "NN Edge Toolkit Lite · Documentation",
    "en": "Lightweight Python Inference SDK",
    "desc": "A lightweight Python inference SDK for Debian boards, designed for CNN and other small-model workloads.",
    "tags": [
      "Python",
      "Debian",
      "CNN"
    ],
    "meta": "SDK Documentation",
    "status": "Documentation",
    "icon": "layers",
    "color": "#4ca29b",
    "url": "https://github.com/Amlogic-NN/amlnn-toolkit/blob/main/amlnn_toolkit_lite/amlnn_edge_toolkit_lite/readme.md"
  },
  {
    "section": "start",
    "category": "SDK Documentation",
    "name": "LLM Edge Toolkit Lite · Documentation",
    "en": "On-device LLM Inference",
    "desc": "A lightweight Python LLM inference SDK for Debian boards, with streaming output, multi-turn conversations, sampling controls and chat templates.",
    "tags": [
      "Python",
      "LLM",
      "ADLA"
    ],
    "meta": "SDK Documentation",
    "status": "Documentation",
    "icon": "code",
    "color": "#8f7cbe",
    "url": "https://github.com/Amlogic-NN/amlnn-toolkit/blob/main/amlnn_toolkit_lite/amlllm_edge_toolkit_lite/readme.md"
  },
  {
    "section": "start",
    "category": "SDK Documentation",
    "name": "NN Runtime · C/C++ · Documentation",
    "en": "Native Neural Network Inference",
    "desc": "Integrate native inference with libnnsdk.so and nnsdk2.h. Explore Android / Linux setup, build steps and base API examples.",
    "url": "https://github.com/Amlogic-NN/amlnn-toolkit/blob/main/amlnn_runtime/nn_runtime/readme.md",
    "tags": [
      "C/C++",
      "CNN",
      "Android",
      "Linux"
    ],
    "icon": "code",
    "meta": "Developer Documentation",
    "status": "Documentation",
    "color": "#4884bd"
  },
  {
    "section": "start",
    "category": "SDK Documentation",
    "name": "LLM Runtime · C/C++ · Documentation",
    "en": "Native LLM Inference",
    "desc": "Integrate native LLM inference with libllmsdk.so and llmsdk.h. Explore streaming callbacks, multi-turn sessions and base API examples.",
    "url": "https://github.com/Amlogic-NN/amlnn-toolkit/blob/main/amlnn_runtime/llm_runtime/readme.md",
    "tags": [
      "C/C++",
      "LLM",
      "Streaming"
    ],
    "icon": "code",
    "meta": "Developer Documentation",
    "status": "Documentation",
    "color": "#4884bd"
  },
  {
    "section": "start",
    "category": "Deployment",
    "name": "Platform Build Guide",
    "en": "Android · Linux · Cross Compilation",
    "desc": "Set up toolchains and build model examples for the target platform.",
    "tags": [
      "Android",
      "Linux",
      "Toolchain"
    ],
    "meta": "Model Playground",
    "status": "Documentation",
    "icon": "book",
    "color": "#4884bd",
    "url": "https://github.com/Amlogic-NN/amlnn-model-playground/blob/main/docs/Platform_compile_guide.md"
  }
];
const paths={chart:'M3 3v18h18 M7 16V9 M12 16V5 M17 16v-5',grid:'M3 3h7v7H3z M14 3h7v7h-7z M3 14h7v7H3z M14 14h7v7h-7z',layers:'m12 3 9 5-9 5-9-5z M3 12l9 5 9-5 M3 16l9 5 9-5',code:'m8 5-7 7 7 7 M16 5l7 7-7 7 M14 3l-4 18',database:'M4 6c0-4 16-4 16 0s-16 4-16 0z M4 6v12c0 4 16 4 16 0V6 M4 12c0 4 16 4 16 0',book:'M12 5v16 M12 5C9 2 4 3 2 4v15c4-2 7-1 10 2 3-3 6-4 10-2V4c-2-1-7-2-10 1z',bag:'M5 8h14l1 13H4z M9 8V5a3 3 0 0 1 6 0v3',video:'M3 5h12v14H3z M15 10l7-4v12l-7-4',mic:'M9 5a3 3 0 0 1 6 0v7a3 3 0 0 1-6 0z M5 10v2a7 7 0 0 0 14 0v-2 M12 19v3 M8 22h8',eye:'M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z M9 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0'};
const svg=k=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${paths[k]||paths.grid}"/></svg>`;
const escapeText=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const safeURL=s=>{try{const u=new URL(s);return ['https:','http:'].includes(u.protocol)?u.href:''}catch{return ''}};
let section='home',category='All',platformFilter='All',precisionFilter='All';
const platformList=r=>(r.platforms||'').split('/').map(s=>s.trim()).filter(Boolean);const precisionOf=r=>{const m=(r.en||'').match(/[Ww]\d+[Aa]\d+/);return m?m[0].toUpperCase():''};
const nav=document.getElementById('nav'),filters=document.getElementById('filters'),grid=document.getElementById('grid'),search=document.getElementById('search');
function renderNav(){nav.innerHTML=SECTIONS.filter(s=>!['troubleshoot','agents','agent-server','quick-intro','quick-cnn','quick-llm'].includes(s.id)).map(s=>{const children=s.id==='quick'?[['quick-intro','Introduction'],['quick-cnn','CNN'],['quick-llm','LLM']]:s.id==='agent'?[['agent-server','Agent Server'],['agents','Agent Examples']]:s.id==='start'?[['troubleshoot','Troubleshooting']]:[];const expanded=s.id===section||children.some(([id])=>id===section);return `<button data-section="${s.id}" class="${expanded?'active':''}" aria-pressed="${s.id===section}" ${children.length?'aria-expanded="'+expanded+'"':''}>${svg(s.icon)}${s.name}</button>${expanded?children.map(([id,name])=>`<button data-section="${id}" class="nav-child ${section===id?'active':''}" aria-pressed="${section===id}">${svg('book')}${name}</button>`).join(''):''}`}).join('')}
function renderFilters(){const cats=['All',...new Set(RESOURCES.filter(r=>r.section===section).map(r=>r.category))];filters.replaceChildren(...cats.map(c=>{const b=document.createElement('button');b.textContent=c;b.className=c===category?'active':'';b.setAttribute('aria-pressed',String(c===category));b.onclick=()=>{category=c;renderFilters();renderCards()};return b}));renderFacets()}

function renderFacets(){
 const host=document.getElementById('facets');if(!host)return;
 const pool=RESOURCES.filter(r=>r.section===section);
 const platforms=[...new Set(pool.flatMap(platformList))].sort();
 const precisions=[...new Set(pool.map(precisionOf).filter(Boolean))].sort();
 if(!platforms.length&&!precisions.length){host.hidden=true;host.innerHTML='';return}
 host.hidden=false;
 const opt=(v,label,current)=>`<option value="${escapeText(v)}"${v===current?' selected':''}>${escapeText(label)}</option>`;
 const active=platformFilter!=='All'||precisionFilter!=='All';
 host.innerHTML=
  `<select id="facet-platform" aria-label="${escapeText(T('Filter by platform','按平台筛选'))}">`+
   ['All',...platforms].map(v=>opt(v,v==='All'?T('All platforms','全部平台'):v,platformFilter)).join('')+`</select>`+
  `<select id="facet-precision" aria-label="${escapeText(T('Filter by precision','按精度筛选'))}">`+
   ['All',...precisions].map(v=>opt(v,v==='All'?T('All precisions','全部精度'):v,precisionFilter)).join('')+`</select>`+
  (active?`<button class="facet-clear" id="facet-clear">${T('Clear','清除')}</button>`:'');
 host.querySelector('#facet-platform').onchange=e=>{platformFilter=e.target.value;renderFilters();renderCards()};
 host.querySelector('#facet-precision').onchange=e=>{precisionFilter=e.target.value;renderFilters();renderCards()};
 const clear=host.querySelector('#facet-clear');
 if(clear)clear.onclick=()=>{platformFilter='All';precisionFilter='All';renderFilters();renderCards()};
}
function renderCards(){grid.hidden=false;document.querySelector('.toolbar').hidden=false;const q=search.value.trim().toLowerCase();const total=RESOURCES.filter(r=>r.section===section).length;const list=RESOURCES.filter(r=>r.section===section&&(category==='All'||r.category===category)&&(platformFilter==='All'||platformList(r).includes(platformFilter))&&(precisionFilter==='All'||precisionOf(r)===precisionFilter)&&[r.name,r.en,r.desc,r.descZh||'',r.meta,r.platforms||'',...r.tags,...(r.links||[]).map(l=>l.label),translateUI(r.name),translateUI(r.desc),translateUI(r.category)].join(' ').toLowerCase().includes(q));{
 const countEl=document.getElementById('count');
 const filtered=platformFilter!=='All'||precisionFilter!=='All';
 if(section==='demos'){
  const modelCount=RESOURCES.filter(r=>r.section==='demos'&&r.platforms).length;
  const chipCount=new Set(RESOURCES.filter(r=>r.section==='demos').flatMap(platformList)).size;
  const precisionCount=new Set(RESOURCES.filter(r=>r.section==='demos').map(precisionOf).filter(Boolean)).size;
  countEl.textContent=filtered
   ? `${list.length} ${T('of','/')} ${total} ${T('shown','条已筛选')}`
   : `${modelCount} ${T('models','个模型')} · ${chipCount} ${T('chips','款芯片')} · ${precisionCount} ${T('precisions','种精度')}`;
 }else{
  countEl.textContent=`${list.length} ${T('resources','项资源')}`;
 }
}grid.innerHTML=list.length?list.map(r=>{const descText=portalLang==='zh'&&r.descZh?r.descZh:r.desc;const url=safeURL(r.url);const links=(r.links||[]).map(l=>[l.label,safeURL(l.url)]).filter(l=>l[1]);const ready=url||links.length;return `<article class="card">${(()=>{const t=r.thumb;return t?`<img class="card-thumb" src="${t}" alt="" width="640" height="400" loading="lazy" decoding="async">`:`<div class="card-thumb-gen" aria-hidden="true"><span class="ct-kicker">${escapeText(r.category)}</span><span class="ct-title">${escapeText(r.name)}</span>${r.perf?`<span class="ct-stats">${r.perf.speed} tok/s · TTFT ${r.perf.ttft} ms · ${r.perf.memory} MB</span>`:""}</div>`})()}<div class="card-top"><span class="icon" style="background:${/^#[0-9a-f]{6}$/i.test(r.color)?r.color:'#4884bd'}">${svg(r.icon)}</span><span class="status ${ready?'ready':''}">${escapeText(r.status)}</span></div><h3>${escapeText(r.name)}</h3><div class="english">${escapeText(r.en)}</div><p class="desc">${escapeText(descText)}</p>${r.platforms?`<div class="card-platforms">${escapeText(r.platforms)}</div>`:''}${r.tags.length?`<div class="tags">${r.tags.map(t=>`<span class="tag">${escapeText(t)}</span>`).join('')}</div>`:''}<div class="card-bottom"><span class="meta">${escapeText(r.meta)}</span>${links.length?`<span class="card-links">${links.map(([label,href])=>`<a class="link" href="${escapeText(href)}" target="_blank" rel="noopener noreferrer">${escapeText(label)} ↗</a>`).join('')}</span>`:(url?`<a class="link" href="${escapeText(url)}" target="_blank" rel="noopener noreferrer" aria-label="Explore ${escapeText(r.name)}">Explore ↗</a>`:'<span class="link pending">Coming Soon</span>')}</div></article>`}).join(''):'<div class="empty">No matching resources. Try another keyword or category.</div>'}
function selectSection(id){section=id;category='All';platformFilter='All';precisionFilter='All';const s=SECTIONS.find(x=>x.id===id);document.getElementById('title').textContent=s.name;document.getElementById('subtitle').textContent=s.desc;renderNav();renderFilters();renderCards()}
nav.addEventListener('click',e=>{const b=e.target.closest('[data-section]');if(b)selectSection(b.dataset.section)});search.addEventListener('input',()=>renderCards());const guide=document.getElementById('guide');document.getElementById('help').onclick=()=>guide.showModal();document.getElementById('close').onclick=()=>guide.close();let PERF_DATA=null;
function loadPerfData(){return loadPerfData.promise||(loadPerfData.promise=fetch('assets/perf.json').then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).then(d=>{PERF_DATA=d;return d}))}

const PERF_CONFIG={cnn:{label:'CNN Throughput',metrics:{A311Y3:'A311Y3 · FPS',S905X5:'S905X5 · FPS',A311D2:'A311D2 · FPS'},note:'CNN FPS includes hardware and software execution time. Input shapes and precision vary by model. Compare platforms within the same model row.',cols:['name','shape','dtype','S905X5','A311D2','A311Y3']},llm:{label:'LLM / VLM Runtime',metrics:{speed:'Throughput · tokens/s',ttft:'TTFT · ms',memory:'Memory · MB'},note:'A9 (A311Y3), Armbian reference board, 8 GB / 16 GB configurations; W4A16, native model runtime test. Select one sequence/context/output configuration. VLM rows are not complete image-pipeline benchmarks.',cols:['name','platform','dtype','seq','context','tokens','ttft','speed','memory']},accuracy:{label:'CNN Accuracy Runs',metrics:{latency:'Latency · ms',memory:'Memory · MB',bandwidth:'Bandwidth · MB'},note:'Accuracy-run measurements are separate from the CNN throughput table. Dataset subsets and metrics differ; full metrics appear in the table. Bandwidth is reported in MB by the source, not MB/s.',cols:['name','task','dtype','dataset','metric','latency','memory','bandwidth']},ppl:{label:'LLM Perplexity',metrics:{adla:'ADLA W4A16 · PPL',baseline:'GGUF FP16 · PPL'},note:'wiki-text2, 300,258 tokens. Lower PPL is better. Baseline and ADLA values are plotted together; delta = ADLA − baseline.',cols:['name','baseline','adla','delta']},mmlu:{label:'MMLU Accuracy',metrics:{adla:'ADLA W4A16 · %',baseline:'GGUF FP16 · %'},note:'5-shot, 500 samples. GGUF FP16 tested on PC GPU; ADLA W4A16 on A311Y3. Higher is better. Delta is recalculated in percentage points, not relative percent.',cols:['name','baseline','adla','delta']}};
const LABELS={name:'Model',shape:'Input shape',dtype:'Precision',platform:'Platform',seq:'SeqLen',context:'Max context',tokens:'New tokens',ttft:'TTFT (ms)',speed:'Tokens/s',memory:'Memory (MB)',bandwidth:'Bandwidth (MB)',latency:'Latency (ms)',task:'Task',dataset:'Validation',metric:'Accuracy metrics',baseline:'GGUF FP16',adla:'ADLA W4A16',delta:'Delta'};
let perfSet='cnn',perfMetric='A311Y3',perfScenario=64,perfSort=null,perfAsc=false;
function perfRows(){let rows=PERF_DATA[perfSet].filter(r=>perfSet!=='llm'||r.seq===Number(perfScenario));const q=search.value.toLowerCase().trim();rows=rows.filter(r=>Object.values(r).join(' ').toLowerCase().includes(q));const key=perfSort||perfMetric;return [...rows].sort((a,b)=>{const x=a[key],y=b[key];if(x==null||y==null)return (x==null)-(y==null);return (typeof x==='number'?x-y:String(x).localeCompare(String(y)))*(perfAsc?1:-1)})}
function barChart(rows){const series=perfSet==='cnn'?['S905X5','A311D2','A311Y3']:['ppl','mmlu'].includes(perfSet)?['baseline','adla']:[perfMetric];const colors=['#2870cb','#29aab3','#8c71cd'];const max=Math.max(1,...rows.flatMap(r=>series.map(k=>r[k])));const rowH=series.length*15+23,H=45+rows.length*rowH,W=940,left=265,right=90,plot=W-left-right;let svg=`<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${escapeText(PERF_CONFIG[perfSet].label)} benchmark comparison">`;for(let t=0;t<=4;t++){const x=left+plot*t/4;svg+=`<path d="M${x} 28V${H-8}" stroke="#e3eaf3"/><text x="${x}" y="17" text-anchor="middle" fill="#728095" font-size="11">${(max*t/4).toFixed(1)}</text>`}rows.forEach((r,i)=>{const y=35+i*rowH;svg+=`<text x="${left-12}" y="${y+12}" text-anchor="end" fill="#35455f" font-size="11">${escapeText(r.name)}${perfSet==='accuracy'?' · '+escapeText(r.dtype):''}</text>`;series.forEach((k,j)=>{const val=r[k];if(typeof val!=='number'){svg+=`<text x="${left+4}" y="${y+j*15+9}" font-size="10" fill="#9aa6b6">N/A<title>${escapeText(r.name)} · ${LABELS[k]||k}: not measured</title></text>`;return}svg+=`<rect x="${left}" y="${y+j*15}" width="${val/max*plot}" height="10" rx="3" fill="${colors[j]}"><title>${escapeText(r.name)} · ${LABELS[k]||k}: ${val}</title></rect><text x="${left+val/max*plot+7}" y="${y+j*15+9}" font-size="10" fill="#5d6e87">${val.toFixed(2)}</text>`})});svg+='</svg>';return `<div class="legend">${series.map((k,i)=>`<span><i style="background:${colors[i]}"></i>${escapeText(LABELS[k]||k)}</span>`).join('')}</div><div class="chart-scroll">${svg}</div>`}
function scatterChart(rows){const maxX=Math.max(1,...rows.map(r=>r.memory)),maxY=Math.max(1,...rows.map(r=>r.speed)),W=750,H=340,left=65,bottom=280,pw=630,ph=235;let s=`<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="LLM memory in MB versus throughput in tokens per second">`;for(let i=0;i<=4;i++){const x=left+pw*i/4,y=bottom-ph*i/4;s+=`<path d="M${left} ${y}h${pw} M${x} 45V${bottom}" stroke="#e4ebf4"/><text x="${left-9}" y="${y+4}" text-anchor="end" font-size="11" fill="#728095">${(maxY*i/4).toFixed(1)}</text><text x="${x}" y="${bottom+20}" text-anchor="middle" font-size="11" fill="#728095">${(maxX*i/4).toFixed(0)}</text>`}rows.forEach(r=>{s+=`<circle cx="${left+r.memory/maxX*pw}" cy="${bottom-r.speed/maxY*ph}" r="6" fill="#247cce" fill-opacity=".7" tabindex="0"><title>${escapeText(r.name)}: ${r.memory} MB · ${r.speed} tokens/s</title></circle>`});return s+`<text x="380" y="330" text-anchor="middle" font-size="12" fill="#51657f">Memory (MB)</text><text x="18" y="165" transform="rotate(-90 18 165)" text-anchor="middle" font-size="12" fill="#51657f">Throughput (tokens/s)</text></svg>`}
function renderPerf(){const host=document.getElementById('performance');if(!PERF_DATA){host.innerHTML='<p class="perf-note">Loading benchmark data…</p>';loadPerfData().then(renderPerf,()=>{host.innerHTML='<p class="perf-note">Could not load benchmark data.</p>'});return}const config=PERF_CONFIG[perfSet],rows=perfRows();const values=rows.map(r=>r[perfMetric]).filter(v=>typeof v==='number');const higher=perfSet==='cnn'||perfMetric==='speed'||perfSet==='mmlu';const best=values.length?(higher?Math.max(...values):Math.min(...values)):null;const bestRow=rows.find(r=>r[perfMetric]===best);host.innerHTML=`<div class="perf-head"><div><span class="eyebrow">PERFORMANCE</span><h2>Model Performance</h2><p>Browse published benchmarks and test configurations.</p></div><a class="link" href="https://github.com/Amlogic-NN/amlnn-model-playground/blob/main/PERFORMANCE.md" target="_blank" rel="noopener noreferrer">Source data ↗</a></div><div class="perf-tabs">${Object.entries(PERF_CONFIG).map(([k,v])=>`<button data-set="${k}" aria-pressed="${k===perfSet}" class="${k===perfSet?'active':''}">${v.label}</button>`).join('')}</div><div class="perf-controls"><label>Metric <select id="perf-metric">${Object.entries(config.metrics).map(([k,v])=>`<option value="${k}" ${k===perfMetric?'selected':''}>${v}</option>`).join('')}</select></label>${perfSet==='llm'?`<label>Test configuration <select id="perf-scenario"><option value="64" ${Number(perfScenario)===64?'selected':''}>Seq 64 · Context 320 · Output 256</option><option value="128" ${Number(perfScenario)===128?'selected':''}>Seq 128 · Context 2048 · Output 1920</option></select></label>`:''}<button class="link" id="csv">Export filtered CSV ↓</button></div><div class="perf-stats"><div><small>Visible records</small><strong>${rows.length}</strong><span>${config.label}</span></div><div><small>${higher?'Highest':'Lowest'} selected value</small><strong>${best===null?'—':best.toFixed(2)}</strong><span>${bestRow?escapeText(bestRow.name):'No results'} · ${escapeText(config.metrics[perfMetric])}</span></div><div><small>Data snapshot</small><strong>Nov 6, 2026</strong><span>From Model Playground · no live polling</span></div></div><p class="perf-note">${config.note}</p><div class="perf-panel"><div class="panel-title"><h3>${config.label} comparison</h3><span>Zero baseline · hover for values</span></div>${rows.length?barChart(rows):'<p>No matching records. Clear the search to see all data.</p>'}</div>${perfSet==='llm'&&rows.length?`<div class="perf-panel"><div class="panel-title"><h3>Memory vs. throughput</h3><span>One point per model · hover for details</span></div>${scatterChart(rows)}</div>`:''}<div class="perf-panel"><div class="panel-title"><h3>Benchmark data</h3><span>Click a column heading to sort</span></div><div class="table-scroll"><table><thead><tr>${config.cols.map(k=>`<th><button data-sort="${k}">${LABELS[k]||k}${k===(perfSort||perfMetric)?(perfAsc?' ↑':' ↓'):''}</button></th>`).join('')}</tr></thead><tbody>${rows.map(r=>`<tr>${config.cols.map(k=>`<td>${escapeText(r[k]==null?'—':typeof r[k]==='number'?r[k].toFixed(['seq','context','tokens'].includes(k)?0:2):r[k])}</td>`).join('')}</tr>`).join('')}</tbody></table></div></div>`;
host.querySelectorAll('[data-set]').forEach(b=>b.onclick=()=>{perfSet=b.dataset.set;perfMetric=Object.keys(PERF_CONFIG[perfSet].metrics)[0];perfSort=null;perfAsc=false;renderPerf()});host.querySelector('#perf-metric').onchange=e=>{perfMetric=e.target.value;perfSort=null;renderPerf()};const scenario=host.querySelector('#perf-scenario');if(scenario)scenario.onchange=e=>{perfScenario=Number(e.target.value);renderPerf()};host.querySelectorAll('[data-sort]').forEach(b=>b.onclick=()=>{if(perfSort===b.dataset.sort)perfAsc=!perfAsc;else{perfSort=b.dataset.sort;perfAsc=true}renderPerf()});host.querySelector('#csv').onclick=()=>{const quote=v=>'"'+String(v??'').replace(/"/g,'""')+'"';const text=[config.cols.map(quote).join(','),...rows.map(r=>config.cols.map(k=>quote(r[k])).join(','))].join('\r\n');const u=URL.createObjectURL(new Blob([text],{type:'text/csv;charset=utf-8'}));const a=document.createElement('a');a.href=u;a.download='amlogic-'+perfSet+'-benchmarks.csv';a.click();URL.revokeObjectURL(u)};
}
const originalRenderCards=renderCards;renderCards=function(){const perf=section==='performance';grid.hidden=perf;document.querySelector('.toolbar').hidden=perf;document.getElementById('performance').hidden=!perf;if(perf)renderPerf();else originalRenderCards()};


const OVERVIEW_TEXT={performance:'Compare model throughput, TTFT, memory and accuracy. Filter test configurations, inspect the data and export benchmark results.',agents:'Explore reference application scenarios and learn how to connect an Agent client to Amlogic Agent Server.',skills:'Find vision, audio and MCP integration resources. Entries awaiting public documentation are marked Coming Soon.',demos:'Browse all 77 models listed in Model Playground. Find supported platforms, precision formats and example code.',sdk:'Choose the full conversion toolkit, lightweight Python SDKs, native C/C++ runtimes or Agent Server for your application.',models:'Download precompiled ADLA model packages from the Hugging Face and ModelScope repositories.',start:'Read quick-start guides, user guides, API references, operator lists, quantization and deployment instructions.'};
let particleCleanup=()=>{};
function startHeroParticles(){
 particleCleanup();
 if(typeof window==='undefined'||window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
 const canvas=document.querySelector('.hero-particles');if(!canvas)return;
 const hero=canvas.parentElement,ctx=canvas.getContext('2d');if(!ctx)return;
 let width=0,height=0,frame=0,previous=0,lastDraw=0,points=[],pointer=null,disposed=false,visible=true;
 const reduced=window.matchMedia('(prefers-reduced-motion: reduce)'),smallScreen=window.matchMedia('(max-width:720px)').matches,minDelta=smallScreen?1000/30:0;
 function resize(){const box=hero.getBoundingClientRect();width=box.width;height=box.height;const dpr=Math.min(window.devicePixelRatio||1,smallScreen?1.5:2);canvas.width=Math.round(width*dpr);canvas.height=Math.round(height*dpr);ctx.setTransform(dpr,0,0,dpr,0,0);points=Array.from({length:smallScreen?Math.min(28,Math.max(14,Math.floor(width/26))):Math.min(80,Math.max(40,Math.floor(width/12)))},()=>({x:Math.random()*width,y:Math.random()*height,vx:25+Math.random()*65,vy:(Math.random()-.5)*18,r:.8+Math.random()*1.5}));}
 function tick(time){if(disposed)return;if(section!=='home'||!canvas.isConnected){stop();return;}if(!visible){previous=time;frame=requestAnimationFrame(tick);return;}if(minDelta&&time-lastDraw<minDelta){frame=requestAnimationFrame(tick);return;}lastDraw=time;const dt=Math.min((time-previous)/1000,.05);previous=time;ctx.clearRect(0,0,width,height);if(pointer){const glow=ctx.createRadialGradient(pointer.x,pointer.y,0,pointer.x,pointer.y,180);glow.addColorStop(0,'rgba(42,171,255,.22)');glow.addColorStop(1,'rgba(42,171,255,0)');ctx.fillStyle=glow;ctx.fillRect(0,0,width,height);}for(const p of points){p.x=(p.x+p.vx*dt+width)%width;p.y=(p.y+p.vy*dt+height)%height;ctx.beginPath();ctx.arc(p.x,p.y,p.r*2.6,0,Math.PI*2);ctx.fillStyle='rgba(58,190,255,.09)';ctx.fill();ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle='rgba(130,217,255,.78)';ctx.fill();ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(p.x-p.vx*.15,p.y-p.vy*.15);ctx.strokeStyle='rgba(93,183,255,.24)';ctx.lineWidth=.7;ctx.stroke();}
 for(let i=0;i<points.length;i++){for(let j=i+1;j<points.length;j++){const a=points[i],b=points[j],distance=Math.hypot(a.x-b.x,a.y-b.y);if(distance<85){ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.strokeStyle='rgba(133,180,235,'+((1-distance/85)*.23)+')';ctx.lineWidth=.65;ctx.stroke();}}if(pointer){const p=points[i],d=Math.hypot(p.x-pointer.x,p.y-pointer.y);if(d<150){ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(pointer.x,pointer.y);ctx.strokeStyle='rgba(167,210,255,'+((1-d/150)*.25)+')';ctx.stroke();}}}frame=requestAnimationFrame(tick);}
 function move(e){const b=hero.getBoundingClientRect();pointer={x:e.clientX-b.left,y:e.clientY-b.top};}function leave(){pointer=null;}function visibility(){cancelAnimationFrame(frame);if(!document.hidden&&!disposed){previous=performance.now();frame=requestAnimationFrame(tick);}}function motion(){if(reduced.matches)stop();}
 const observer=new ResizeObserver(resize);observer.observe(hero);const io=new IntersectionObserver(es=>{visible=es[0].isIntersecting},{threshold:0});io.observe(hero);hero.addEventListener('pointermove',move);hero.addEventListener('pointerleave',leave);document.addEventListener('visibilitychange',visibility);reduced.addEventListener('change',motion);
 function stop(){if(disposed)return;disposed=true;cancelAnimationFrame(frame);observer.disconnect();io.disconnect();hero.removeEventListener('pointermove',move);hero.removeEventListener('pointerleave',leave);document.removeEventListener('visibilitychange',visibility);reduced.removeEventListener('change',motion);ctx.clearRect(0,0,width,height);}
 particleCleanup=stop;
  // Start the decoration only once the page is idle: it must never compete with first paint.
  const begin=()=>{if(disposed||!canvas.isConnected)return;resize();previous=performance.now();lastDraw=0;frame=requestAnimationFrame(tick)};
  if(window.requestIdleCallback)requestIdleCallback(begin,{timeout:900});else setTimeout(begin,80);
}
// The home view is pre-rendered into the HTML (tools/prerender_home.mjs). Adopt that
// markup instead of rebuilding it on first paint: same DOM, no parse+layout burst.
function adoptHome(){const host=document.getElementById('overview');if(!host||host.dataset.prerender!=='home'||portalLang!=='en'||search.value.trim())return false;bindPortalLinks(host);startHeroParticles();return true}
const priorRenderCards=renderCards;renderCards=function(){const home=section==='home';if(!home)particleCleanup();document.getElementById('overview').hidden=!home;if(home){grid.hidden=true;document.querySelector('.toolbar').hidden=true;document.getElementById('performance').hidden=true;adoptHome()||renderOverview()}else priorRenderCards()};

// Add verified community invite URLs here when they are ready.
const COMMUNITY_LINKS={qq:'',discord:''};
// Bilingual onboarding and information architecture.
let portalLang='en';try{portalLang=localStorage.getItem('amlogic-language')||'en'}catch{}if(!['en','zh'].includes(portalLang))portalLang='en';
const T=(en,zh)=>portalLang==='zh'?zh:en;
SECTIONS.splice(1,0,{id:'quick',name:'Quick Start',icon:'code',desc:'Follow the PDF guide from environment checks to YOLOX conversion and deployment.'},{id:'troubleshoot',name:'Troubleshooting',icon:'book',desc:'Find checks for setup, conversion, deployment and accuracy problems.'});
const DOC_BASE='https://github.com/Amlogic-NN/amlnn-toolkit/blob/main/';
const GUIDE_URL=DOC_BASE+'amlnn_toolkit/readme.md';
const TERMS=[['NPU','Neural Processing Unit: the hardware accelerator that runs supported model operations.','神经网络处理器：执行受支持模型算子的硬件加速器。'],['ADLA','The compiled model format used by the Amlogic runtime. Choose a package compiled for your platform.','Amlogic Runtime 使用的编译模型格式，应选择与目标芯片匹配的模型包。'],['SDK','Software Development Kit: APIs, libraries and examples used to integrate inference into an application.','软件开发套件：用于把模型推理接入应用的接口、库和示例。'],['Toolkit','Tools for importing, quantizing, compiling and validating models.','完成模型导入、量化、编译与验证的工具链。'],['Runtime','The software on the device that loads the compiled model and executes inference.','运行在设备上、负责加载模型并执行推理的软件。'],['Quantization','Represent weights or activations at lower precision to reduce storage or computation. Validate accuracy afterwards.','用较低精度表示权重或激活，以降低存储或计算开销；需要验证精度。'],['Calibration','Representative input samples used to determine activation quantization parameters for relevant quantization modes.','用有代表性的输入样本确定相应量化模式下的激活量化参数。'],['CNN','Convolutional Neural Network: commonly used for image classification, detection and other perception tasks.','卷积神经网络，常用于图像分类、检测等感知任务。'],['LLM','Large Language Model: generates or processes language, for example conversation and summarization.','大语言模型，用于对话、摘要等语言生成和处理任务。'],['VLM','Vision-Language Model: processes images together with language.','视觉语言模型，可结合图像与语言进行理解。'],['FPS','Frames per second. Higher means more inputs processed per second under the stated test conditions.','每秒处理帧数；在相同测试条件下，数值越高代表吞吐量越大。'],['TTFT','Time to first token: the delay before the first generated token. Usually reported in milliseconds.','首 Token 延迟：从请求开始到生成首个 Token 的耗时，通常以毫秒表示。'],['Agent','An application that uses a model together with tools and application logic to complete a task.','结合模型、工具和应用逻辑完成任务的应用。'],['MCP','Model Context Protocol: a protocol for connecting applications to tools and data.','模型上下文协议，用于连接应用与工具、数据。'],['nnserver','A device-side service used by the full Toolkit to run inference remotely from an x86 PC over ADB.','完整 Toolkit 从 x86 PC 经 ADB 调用板端推理时使用的设备侧服务。'],['w8a8 / w4a16','Precision notation for weights and activations. Check the model configuration for the exact integer or floating-point types.','权重与激活精度的表示方式；具体整数或浮点类型以模型配置为准。']];
const termHTML=()=>TERMS.map(([n,en,zh])=>`<details class="term"><summary>${n}</summary><p>${T(en,zh)}</p></details>`).join('');
const openButton=(id,en,zh)=>`<button class="link" data-open="${id}">${T(en,zh)} →</button>`;
function bindPortalLinks(host){host.querySelectorAll('[data-open]').forEach(b=>b.onclick=()=>{search.value='';selectSection(b.dataset.open);window.scrollTo?.({top:0,behavior:'instant'})})}
const TILE_COPY={"sdk":["BUILD & INTEGRATE","开发与集成","SDK / Toolkit","SDK / 工具链","Convert ONNX or GGUF models, then call them from Python or C/C++.","转换 ONNX / GGUF 模型，再用 Python 或 C/C++ 调用。","Python · C/C++","Python · C/C++"],"demos":["EXPLORE & RUN","找模型、跑示例","Model Demos","模型示例","77 runnable examples with preprocessing, postprocessing and platform notes.","77 个可运行的示例，含预处理、后处理与平台说明。","77 supported models","77 个受支持模型"],"performance":["MEASURE & COMPARE","看实测数据","Performance","性能数据","Throughput, first-token latency, memory and accuracy, with test conditions shown.","吞吐、首字延迟、内存与精度，并标注测试条件。","CNN · LLM · VLM","CNN · LLM · VLM"],"models":["DOWNLOAD & DEPLOY","下载现成模型","ADLA Hub","ADLA 模型库","Model files already compiled for your chip, on Hugging Face and ModelScope.","已按芯片编译好的模型包，托管在 Hugging Face 与 ModelScope。","2 model repositories","2 个模型仓库"],"start":["READ & LEARN","查文档","Doc Center","文档中心","Quick start, API reference, operator lists and deployment guides.","快速入门、API、算子清单与部署指南。","15 document entries","24 个文档条目"],"agents":["CONNECT & EXTEND","接智能体","Agent Examples","Agent 示例","Reference applications, plus how an Agent client reaches the on-device service.","参考应用，以及 Agent 客户端如何接入端侧服务。","Application workflows","应用工作流"],"skills":["TOOLS & CAPABILITIES","扩展能力","Skills / MCP","Skills / MCP","Vision, audio and tool-calling resources to extend your Agent.","为 Agent 扩展视觉、音频与工具调用能力。","Published links coming soon","链接即将发布"]};
const NEW_MODULES=[['quick','Start with a complete example','运行第一个完整示例','Environment → conversion → inference → validation. Choose your board and execution mode.','环境搭建 → 模型转换 → 推理 → 验证，按芯片和执行方式开始。','Environment / Platform / MobileNet','环境准备 / 芯片选择 / MobileNet'],['sdk','Develop with the right interface','选择开发接口','Convert models or integrate Python and C/C++ inference into your application.','转换自己的模型，或通过 Python、C/C++ 把推理接入应用。','Full Toolkit / Python Lite / C/C++ / Agent Server','完整工具链 / Python Lite / C/C++ / Agent Server'],['demos','Find a supported model','查找支持的模型','Browse task categories, model precision, platform support and example code.','按任务查找模型，查看量化格式、平台支持和示例代码。','Vision / Audio / LLM / VLM','视觉 / 音频 / LLM / VLM'],['models','Download a compiled model','下载已编译模型','Get ADLA model packages from Hugging Face or ModelScope. Match the package to your device.','从 Hugging Face 或 ModelScope 获取与目标设备匹配的 ADLA 模型包。','Hugging Face / ModelScope','Hugging Face / ModelScope'],['performance','Compare published measurements','查看评测数据','Inspect throughput, latency, memory and accuracy with their test conditions.','查看吞吐量、延迟、内存和精度，以及相应测试条件。','CNN FPS / LLM Runtime / PPL / MMLU','CNN FPS / LLM 性能 / PPL / MMLU'],['start','Read technical documentation','查阅技术文档','Find installation, API, operator, quantization, deployment and troubleshooting documentation.','集中查阅安装、API、算子支持、量化、部署与常见问题排查文档。','Quick Start / API / Deployment / Troubleshooting','入门 / API / 部署 / 常见问题排查'],['troubleshoot','Resolve a deployment problem','排查部署问题','Check common failures and collect the information needed to report an issue.','按阶段排查常见故障，并收集反馈问题所需的信息。','Setup / Conversion / Runtime / Accuracy','环境 / 转换 / 运行 / 精度'],['agents','Explore application scenarios','探索应用场景','Understand reference scenarios and how an Agent client connects to the model service.','了解参考应用场景，以及 Agent 客户端如何接入模型服务。','Reference Scenarios / Client Integration','场景参考 / 客户端接入'],['skills','Extend application capabilities','扩展应用能力','Explore vision, audio and tool integration categories. Unpublished entries are marked Coming Soon.','了解视觉、音频和工具集成分类；未发布资源会标注即将提供。','Vision / Audio / MCP','视觉 / 音频 / MCP']];
renderOverview=function(){
 const q=search.value.trim().toLowerCase(),order=['sdk','demos','performance','models','start','agents','skills'];
 const items=order.map(id=>SECTIONS.find(s=>s.id===id)).filter(s=>(s.name+' '+OVERVIEW_TEXT[s.id]).toLowerCase().includes(q));
 const models=RESOURCES.filter(r=>r.section==='demos'&&r.status==='Supported').length,docs=RESOURCES.filter(r=>r.section==='start').length,chips=QS_PLATFORMS.length,platforms=new Set(QS_PLATFORMS.flatMap(p=>p[3])).size;
 const copy={sdk:['BUILD & INTEGRATE','SDK / Toolkit','From model conversion to native inference. Choose the right Python or C/C++ interface.','Python · C/C++'],demos:['EXPLORE & RUN','Model Demos','Find example code, quantization formats and platform support for your model.',models+' supported models'],performance:['MEASURE & COMPARE','Performance','Inspect throughput, latency, memory and accuracy under documented test conditions.','CNN · LLM · VLM'],models:['DOWNLOAD & DEPLOY','ADLA Hub','Precompiled model packages, available on Hugging Face and ModelScope.','2 model repositories'],start:['READ & LEARN','Doc Center','Quick starts, API references, operator lists and deployment guides in one place.',docs+' document entries'],agents:['CONNECT & EXTEND','Agent Examples','Reference scenarios and an OpenAI-compatible Agent client integration guide.','Application workflows'],skills:['TOOLS & CAPABILITIES','Skills / MCP','Discover vision, audio and tool integration resources for your applications.','Published links coming soon']};
 const host=document.getElementById('overview');host.removeAttribute('data-prerender');host.innerHTML=`<section class="home-hero"><div class="sci-orbit orbit-one" aria-hidden="true"></div><div class="sci-orbit orbit-two" aria-hidden="true"></div><div class="sci-scan" aria-hidden="true"></div><canvas class="hero-particles" aria-hidden="true"></canvas><div class="hero-copy"><div class="hero-kicker"><span></span> AMLOGIC AI DEVELOPMENT</div><h2>Build on the edge.<br><em>Start here.</em></h2><p>One place for the tools, models and documentation you need to develop on Amlogic platforms.</p><div class="hero-actions"><button data-open="start" class="hero-button">Explore documentation <span>↗</span></button><button data-open="demos" class="hero-secondary">Browse models →</button></div></div><div class="hero-stack" aria-hidden="true"><div class="stack-caption">THE DEVELOPMENT STACK</div><div class="stack-row"><span>01</span><strong>Applications</strong><small>Agents / Skills / MCP</small></div><div class="stack-row"><span>02</span><strong>Interfaces</strong><small>Python / C++ / OpenAI API</small></div><div class="stack-row"><span>03</span><strong>Models & Runtime</strong><small>CNN / LLM / VLM / ADLA</small></div><div class="stack-base">AMLOGIC NPU <span>ON-DEVICE INFERENCE</span></div></div></section><div class="home-facts"><div><strong>${models}</strong><span>${T('Supported models','受支持模型')}</span></div><div><strong>${chips}</strong><span>${T('Chip platforms','芯片平台')}</span></div><div><strong>${platforms}</strong><span>${T('OS targets','目标系统')}</span></div><div><strong>${docs}</strong><span>${T('Documentation entries','文档条目')}</span></div></div><div class="home-section-head"><h3>Find your next step</h3><span>Explore the developer ecosystem</span></div><div class="home-directory">${items.map(s=>{const c=TILE_COPY[s.id]||[];return `<button class="home-tile ${s.id==='sdk'?'tile-featured':''}" data-open="${s.id}"><div class="tile-top"><span class="tile-icon">${svg(s.icon)}</span><span class="tile-arrow">↗</span></div><small class="tile-kicker">${T(c[0]||'',c[1]||'')}</small><h3>${T(c[2]||s.name,c[3]||s.name)}</h3><p>${T(c[4]||'',c[5]||'')}</p><div class="tile-bottom">${T(c[6]||'',c[7]||'')}<span>${T('Explore →','查看 →')}</span></div></button>`}).join('')}</div>${items.length?'':'<p>No matching sections.</p>'}<section class="glossary"><h3>New to the terminology?</h3><p>Open a term for a plain-language explanation.</p><div class="term-grid">${termHTML()}</div></section>`;
 bindPortalLinks(host);
 startHeroParticles();
};
let quickMode='native',quickPlatform='007';

function qsOrientation(){
 const block=(title,subtitle,kind='')=>`<div class="flow-block ${kind}"><strong>${title}</strong><small>${subtitle}</small></div>`;
 const arrow='<span class="flow-arrow" aria-hidden="true">→</span>';
 const terms=[['SoC / NPU',T('The SoC is your device chip. Its NPU accelerates supported neural-network operations; your application and preprocessing still run on the CPU.','SoC 是设备芯片；其中的 NPU 加速受支持的神经网络算子，应用逻辑与预处理等仍由 CPU 执行。')],['Model / ONNX',T('A model contains a computation graph and weights. ONNX is a common interchange format, not the executable format you load directly on this NPU.','模型包含计算图与权重。ONNX 是常见的模型交换格式，不是直接加载到该 NPU 执行的格式。')],['ADLA',T('Amlogic Deep Learning Accelerator. In this workflow, a .adla file is the compiled model artifact for a selected Amlogic target platform.','Amlogic Deep Learning Accelerator。在本流程中，.adla 是为指定 Amlogic 目标平台编译后的模型文件。')],['Quantization / Calibration',T('Quantization reduces numerical precision. Calibration uses representative inputs to choose activation quantization parameters where required. It is not model training.','量化是降低数值精度；校准通过有代表性的输入确定相应激活量化参数，不是重新训练模型。')],['Compiler / target_platform',T('The compiler converts the model into target-specific execution form. The target_platform value must match the physical chip; a model compiled for another chip may not run.','编译器生成目标平台可执行的模型形式。target_platform 必须匹配实际芯片，为其他芯片编译的模型不一定能运行。')],['SDK / Runtime',T('The SDK provides integration APIs and examples. The runtime is the device-side software that loads and executes the compiled model.','SDK 提供集成 API 与示例；Runtime 是板端负责加载和执行编译模型的软件。')],['ADB / nnserver',T('ADB connects the host PC and the board. The nnserver helper is a board-side proxy for PC-driven remote inference; local C/C++ or Python inference does not need it.','ADB 连接 PC 与板卡；nnserver 是 PC 远程推理所需的板端代理，本地 C/C++ 或 Python 推理不需要它。')],['Host / Target / ABI',T('Host means the development PC; target means the board. ABI and 32/64-bit libraries determine whether an executable can run on the selected OS.','Host 指开发 PC，Target 指目标板卡。ABI 及 32/64 位库决定可执行文件能否在对应系统上运行。')]];
 const tools=[['amlnn_toolkit',T('Ubuntu x86 PC','Ubuntu x86 PC'),T('Import → quantize → compile; optionally validate over ADB.','导入 → 量化 → 编译，也可通过 ADB 连板验证。'),T('I need to convert a model.','我需要转换模型。')],['amlnn_edge_toolkit',T('ARM board · full package','ARM 板端 · 完整包'),T('Convert and infer locally, subject to board dependencies and memory.','在板端完成转换与推理，受依赖环境和内存限制。'),T('I want conversion on the board.','我希望直接在板端转换。')],['amlnn_edge_toolkit_lite',T('ARM board · Python','ARM 板端 · Python'),T('Run already-compiled models; no conversion toolchain.','运行已编译模型，不提供完整转换工具链。'),T('I already have ADLA and want Python.','已有 ADLA，希望用 Python。')],['NN / LLM Runtime SDK',T('Board · C/C++','板端 · C/C++'),T('Integrate native inference via libnnsdk.so or libllmsdk.so.','通过 libnnsdk.so 或 libllmsdk.so 接入原生推理。'),T('I am integrating a native application.','我要集成原生应用。')],['Model Playground',T('Examples and source code','示例与源码'),T('Model-specific scripts, preprocessing, postprocessing and build instructions.','按模型提供脚本、预处理、后处理和编译说明。'),T('I need a working reference.','我要一个可复用的示例。')],['ADLA Hub',T('Model download repositories','模型下载仓库'),T('Find precompiled packages; verify platform and runtime compatibility.','获取预编译模型包，需核对平台与运行库兼容性。'),T('I want to try an existing model first.','我要先试用现成模型。')]];
 return `<section class="qs-orientation"><div class="orientation-heading"><span class="eyebrow">BEFORE YOU START</span><h2>${T('Understand the tools before running commands','先认识工具，再开始操作')}</h2><p>${T('You do not need to know the whole stack. Start with one board, one supported model and one deployment path. This guide uses YOLOX object detection as the worked example.','不需要先掌握整套技术栈。只要确定一块板卡、一个受支持的模型和一条部署路线，就可以开始。本指南以 YOLOX 目标检测为完整实例。')}</p></div><h3>${T('1. What are we building?','1. 我们要完成什么？')}</h3><div class="orientation-flow" aria-label="Model development workflow">${block(T('Prepare the model','准备模型'),'ONNX / TFLite')}${arrow}${block(T('Convert & compile','转换与编译'),T('Toolkit · target platform','Toolkit · 目标芯片'))}${arrow}${block(T('Get an ADLA file','获得 ADLA 文件'),T('Compiled for your chip','为目标芯片编译'))}${arrow}${block(T('Run your application','运行应用'),T('Runtime → NPU','Runtime → NPU'),'flow-target')}</div><p class="orientation-caption">${T('A model file alone is not the entire demo. The application also needs correct inputs, preprocessing, output decoding and the device runtime.','仅有模型文件还不等于完整 Demo：应用还需要正确的输入、预处理、输出解码以及板端运行库。')}</p><h3>${T('2. Which tool should I use?','2. 我应该用哪个工具？')}</h3><div class="table-scroll"><table class="tool-explainer"><thead><tr>${[T('Tool / resource','工具 / 资源'),T('Where it runs','运行位置'),T('What it does','用途'),T('Choose it when…','适合什么需求')].map(x=>'<th style="padding:12px">'+x+'</th>').join('')}</tr></thead><tbody>${tools.map(r=>'<tr>'+r.map(x=>'<td>'+x+'</td>').join('')+'</tr>').join('')}</tbody></table></div><h3>${T('3. What happens on the PC and on the board?','3. PC 和板端分别做什么？')}</h3><div class="deployment-explain"><article><h4>${T('PC-driven development','PC 主导开发')}</h4><div class="deployment-lane"><span class="lane-label">${T('PC / Host','PC / 主机')}</span>${block(T('Convert model','转换模型'),T('Full Toolkit → .adla','完整 Toolkit → .adla'))}</div><div class="lane-transfer">↓ ${T('Transfer model and inputs over ADB / network','经 ADB / 网络传输模型和输入')}</div><div class="deployment-lane"><span class="lane-label">${T('Board / Target','板端 / 目标设备')}</span>${block(T('Run inference','执行推理'),T('nnserver or native SDK → Runtime → NPU','nnserver 或原生 SDK → Runtime → NPU'),'flow-target')}</div><p>${T('Use nnserver for PC-driven validation. For a standalone product, use the board Python or C/C++ runtime.','PC 连板验证使用 nnserver；独立运行的产品可选择板端 Python 或 C/C++ Runtime。')}</p></article><article><h4>${T('Board-only development','板端独立开发')}</h4><div class="deployment-lane"><span class="lane-label">${T('Board / Target','板端 / 目标设备')}</span>${block(T('Convert model','转换模型'),T('Full Edge Toolkit → .adla','完整 Edge Toolkit → .adla'),'flow-target')}</div><div class="lane-transfer">↓ ${T('Local model file · no PC conversion','本地模型文件 · 无需 PC 转换')}</div><div class="deployment-lane"><span class="lane-label">${T('Same board','同一板卡')}</span>${block(T('Run inference','执行推理'),T('Python API → Runtime → NPU','Python API → Runtime → NPU'),'flow-target')}</div><p>${T('Requires a supported board Python environment and enough memory. The Lite package alone cannot perform this conversion step.','需要受支持的板端 Python 环境和足够内存。仅安装 Lite 包不能完成上面的模型转换步骤。')}</p></article></div><h3>${T('4. Terms you will see in this guide','4. 本指南会用到的术语')}</h3><div class="beginner-terms">${terms.map(([n,d])=>`<article><h4>${n}</h4><p>${d}</p></article>`).join('')}</div><div class="orientation-checklist"><h3>${T('Before continuing, identify these four things','继续之前，先确认这四件事')}</h3><ol><li>${T('Your board/chip model, for example A311Y3 (A9).','板卡与芯片型号，例如 A311Y3（A9）。')}</li><li>${T('Board OS and 32/64-bit executable architecture.','板端系统与 32/64 位程序架构。')}</li><li>${T('Whether conversion happens on the PC or on the board.','模型转换是在 PC 还是板端完成。')}</li><li>${T('Whether you want remote validation, Python inference or a C/C++ application.','你需要连板验证、Python 推理，还是 C/C++ 应用。')}</li></ol><p>${T('The next chapter helps you choose these settings and generates the corresponding commands.','下一章会帮助你完成这些选择，并生成相应操作命令。')}</p></div></section>`;
}
const YOLOX_RESULT_IMAGE="assets/yolox-result-image.webp";
function qsResultFigure(){return `<figure class="yolox-result-figure"><div class="result-figure-head"><h4>${T('YOLOX detection example','YOLOX 检测结果示例')}</h4><span>${T('Example output','示例输出')}</span></div><img src="${YOLOX_RESULT_IMAGE}" srcset="assets/yolox-result-image-800.webp 800w, assets/yolox-result-image.webp 1920w" sizes="(max-width:720px) 92vw, 1100px" width="1920" height="1080" loading="lazy" decoding="async" alt="${T('YOLOX example with detection boxes, class labels and confidence scores.','YOLOX 检测示例，展示检测框、类别与置信度。')}" style="display:block;width:100%;height:auto"><figcaption>${T('Reference output from the Amlogic Model Playground YOLOX example. Results may vary with model, precision and input.','来自 Amlogic Model Playground YOLOX 示例的参考输出，实际结果随模型、精度与输入变化。')}<div class="source-links"><a class="link" href="https://github.com/Amlogic-NN/amlnn-model-playground/tree/main/examples/yolox" target="_blank" rel="noopener noreferrer">${T('YOLOX example source','YOLOX 示例来源')} ↗</a></div></figcaption></figure>`}
// Quick Start, based on PDF v0.1 (30 pages), with current YOLOX CLI updates.
let qsOS='yocto',qsBits='64';
const QS_PLATFORMS=[['001','C308L / C302X','c308l',['buildroot']],['002','S928X','s928x',['android','yocto']],['003','A311D2','a311d2',['android','yocto']],['004','T968D4','t968d4',['android','yocto']],['005','S905X5 / S905D5','s905x5',['android','yocto']],['006','C302X2','c302x2',['buildroot']],['007','A311Y3 / A9','a311y3',['android','armbian','yocto']],['008','C305X2 / A123X','c305x2',['buildroot']]];
const QS_CDN='https://pub-8378326bd0fe4b1d9312a3847f6316a2.r2.dev';
function qsCode(code){return `<div class="command-box"><button class="copy-command" data-copy>${T('Copy','复制')}</button><pre><code>${escapeText(code)}</code></pre></div>`}
function qsLink(url,en,zh){return `<a class="link" href="${url}" target="_blank" rel="noopener noreferrer">${T(en,zh)} ↗</a>`}
function qsNote(en,zh){return `<p class="perf-note">${T(en,zh)}</p>`}
function qsSection(id,num,en,zh,pages,body){return `<section class="qs-chapter" id="qs-${id}"><div class="qs-chapter-head"><span>${num}</span><h3>${T(en,zh)}</h3><small>${T('PDF pp. ','PDF 第 ')}${pages}${T('',' 页')}</small></div>${body}</section>`}
function renderQuick(){
 const host=document.getElementById('learning'),platform=QS_PLATFORMS.find(x=>x[0]===quickPlatform)||QS_PLATFORMS[6];
 if(!platform[3].includes(qsOS))qsOS=platform[3].includes('armbian')?'armbian':platform[3][0];
 if(qsOS==='armbian')qsBits='64';
 const boardPython=['armbian','yocto'].includes(qsOS)&&qsBits==='64';
 if(['native','lite'].includes(quickMode)&&!boardPython)quickMode='nnserver';
 const native=quickMode==='native',cpp=quickMode==='cpp',lite=quickMode==='lite';
 const binaryOS=qsOS==='armbian'?'yocto':qsOS,libBits=qsBits==='64'?'lib64':'lib32';
 const nnPath=`amlnn_toolkit/nnserver/${qsOS==='android'?'android':'linux/'+binaryOS}/${libBits}/nnserver`;
 const model=`mobilenet_v1_1.0_224_quant_${platform[2]}.adla`,sample=`nnsample_${binaryOS}_${qsBits}`,llm=`llm_demo_${binaryOS}_${qsBits}`;
 const pdf=DOC_BASE+'doc/01_Amlogic_NPU_Quick_Start_guide_'+(portalLang==='zh'?'CN_':'')+'V0.1.pdf';
 const yolox='https://github.com/Amlogic-NN/amlnn-model-playground/blob/main/examples/yolox/README.md';
 const table=(heads,rows)=>`<div class="table-scroll"><table><thead><tr>${heads.map(x=>'<th style="padding:12px">'+x+'</th>').join('')}</tr></thead><tbody>${rows.map(r=>'<tr>'+r.map(x=>'<td>'+x+'</td>').join('')+'</tr>').join('')}</tbody></table></div>`;
 const installHost=`wget https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-Linux-x86_64.sh\nbash Miniforge3-Linux-x86_64.sh\nsource ~/.bashrc\nconda create -n amlnn python=3.10 -y\nconda activate amlnn\npython --version\npip install --upgrade pip\ncd ~/workspace/amlnn-toolkit\npip install -r amlnn_toolkit/whl/linux_x86/requirements_x86_64.txt\npip install amlnn_toolkit/whl/linux_x86/amlnn_toolkit-1.0.0-cp310-cp310-linux_x86_64.whl\npython -c "from amlnn.api import AMLNN; print('AMLNN-Toolkit import OK')"`;
 const installBoard=`wget https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-Linux-aarch64.sh\nbash Miniforge3-Linux-aarch64.sh\nsource ~/.bashrc\nconda create -n amlnn python=3.10 -y\nconda activate amlnn\npython --version\npip install --upgrade pip\n# Run from the directory containing the downloaded wheel and requirements\npip install -r requirements_aarch64.txt\npip install amlnn_edge_toolkit-1.0.0-cp310-cp310-linux_aarch64.whl\npython -c "from amlnn.api import AMLNN; print('AMLNN-Toolkit import OK')"`;
 const clone='mkdir -p ~/workspace\ncd ~/workspace\ngit clone https://github.com/Amlogic-NN/amlnn-toolkit.git --depth 1\ngit clone https://github.com/Amlogic-NN/amlnn-model-playground.git --depth 1';
 const conversion=`cd ~/workspace/amlnn-model-playground/examples/yolox/py\npython export_adla.py --help\npython export_adla.py \\\n  --onnx ../model/yolox_s.onnx \\\n  --dataset-path ../../../resource/detection_dataset.txt \\\n  --target-platform ${quickPlatform} \\\n  --output-dir ../model`;
 const run=`cd ~/workspace/amlnn-model-playground/examples/yolox/py\npython yolox_inference.py --help\npython yolox_inference.py \\\n  --adla ../model/yolox_s_w8a8.adla \\\n  --image-dir ../input`;
 const library=qsOS==='android'?`/vendor/${libBits}`:'/usr/lib:/usr/lib64';
 const nativeCase=`# PC: download and unpack the matching native-case package\nwget ${QS_CDN}/Quick_Start/DDK5.10.4.10/ddk_5.10.4.10_native_case.tar.gz\ntar -xzf ddk_5.10.4.10_native_case.tar.gz\n# Enter the extracted directory containing these files\nadb shell "mkdir -p /data/local/tmp/npu_quickstart"\nadb push ${sample} ${model} 224x224x3_fish_uint8.bin /data/local/tmp/npu_quickstart/\nadb shell\ncd /data/local/tmp/npu_quickstart\nchmod +x ${sample}\ncat /proc/interrupts | grep adla\n./${sample} ${model} 224x224x3_fish_uint8.bin --base\ncat /proc/interrupts | grep adla\nexit`;
 const chapters=[];
 chapters.push(qsSection('routes','01','Choose your deployment path','选择部署方式','5, 11–12',`<p>${T('Select the chip, board OS and executable bitness first. The controls below generate commands for your configuration. The platform/OS matrix follows PDF v0.1, not a live product-support guarantee.','先选择芯片、板端系统和可执行程序位数，再选择部署方式。下方命令随配置生成。平台/OS 对照依据 PDF v0.1，不代表实时产品支持承诺。')}</p><div class="perf-controls"><label>${T('Chip','芯片')}<select id="quick-platform">${QS_PLATFORMS.map(x=>`<option value="${x[0]}" ${quickPlatform===x[0]?'selected':''}>${x[1]} · ${x[0]}</option>`).join('')}</select></label><label>${T('Board OS','板端系统')}<select id="qs-os">${platform[3].map(os=>`<option value="${os}" ${qsOS===os?'selected':''}>${os==='armbian'?'Armbian / Debian':os==='yocto'?'Yocto':os==='android'?'Android':'Buildroot'}</option>`).join('')}</select></label><label>${T('Bitness','程序位数')}<select id="qs-bits"><option value="64" ${qsBits==='64'?'selected':''}>64-bit</option>${qsOS!=='armbian'?`<option value="32" ${qsBits==='32'?'selected':''}>32-bit</option>`:''}</select></label><label>${T('Deployment path','部署路线')}<select id="quick-mode">${[['nnserver','PC conversion + ADB inference','PC 转换 + ADB 连板推理',true],['cpp','PC conversion + C/C++ on device','PC 转换 + 板端 C/C++ 推理',true],['lite','PC conversion + Python Lite on device','PC 转换 + 板端 Python Lite 推理',boardPython],['native','Board conversion + Python inference','板端转换 + Python 推理',boardPython]].filter(x=>x[3]).map(([id,en,zh])=>`<option value="${id}" ${quickMode===id?'selected':''}>${T(en,zh)}</option>`).join('')}</select></label></div>${table([T('Path','路线'),T('Where conversion runs','转换位置'),T('Where inference runs','推理位置'),T('Use when','适用情况')],[['PC + ADB','Ubuntu PC',T('Board NPU via nnserver','经 nnserver 调用板端 NPU'),T('Model debugging and remote validation','模型调试与远程验证')],['C/C++','Ubuntu PC',T('Native application on board','板端原生应用'),T('Native application integration','原生应用集成')],['Python Lite','Ubuntu PC',T('Board Python runtime','板端 Python Runtime'),T('Python inference without full conversion tools','仅需 Python 推理，无需板端转换工具')],[T('Board-native','板端全流程'),T('Board','板端'),T('Board','板端'),T('Local conversion of models that fit available memory','可用内存允许的模型本地转换')]])}${qsNote('Board-native and Python Lite paths here target 64-bit Armbian or a Yocto image with Python/development dependencies. Board conversion may run out of memory on large models. OS and ABI support must also match your board release.','本页板端全流程和 Python Lite 路线面向 64 位 Armbian，或已补齐 Python/开发依赖的 Yocto 镜像。大模型板端转换可能内存不足；OS 与 ABI 支持还需与板端 Release 对齐。')}`));
 chapters.push(qsSection('check','02','Confirm versions, OS and architecture','确认版本、系统与架构','6–7',`<p>${T('Run these from the PC connected to your board. On the board terminal, omit the adb shell prefix.','以下命令从连接板卡的 PC 执行；如已进入板端终端，去掉 adb shell 前缀。')}</p>${qsCode(`adb shell cat /sys/class/adla/adla0/device/kmd_version\nadb shell "strings ${qsOS==='android'?'/vendor/'+libBits:'/usr/lib'}/libnnsdk.so | grep NNSDK"\nadb shell uname -m\n${qsOS==='android'?'adb shell getprop ro.product.cpu.abi':'adb shell cat /version.txt'}\nadb shell cat /proc/cpuinfo\n# Some board releases also provide:\nadb shell cat /proc/cpu_chipid`)}${table([T('Item','检查项'),T('Expected in PDF v0.1','PDF v0.1 要求')],[['ADLA KMD','≥ 2.0.2'],['NNSDK','≥ 3.0.0'],['NNSDK2','≥ 1.0.0'],[T('Android ABI','Android ABI'),'arm64-v8a / armeabi-v7a'],[T('Linux architecture','Linux 架构'),'aarch64 / armv7l']])}<p>${T('Confirm the chip using the board part number and the platform mapping. Version files such as /version.txt are specific to official release images and may not exist on third-party boards.','通过芯片/板卡型号及平台对照确认目标平台。/version.txt 等版本文件依赖官方 Release 镜像，第三方板卡不一定提供。')}</p>${qsLink('https://github.com/Amlogic-NN/amlnn-model-playground/blob/main/docs/mapping.md','Platform mapping','平台编号对照')}`));
 chapters.push(qsSection('native','03','Verify the board before installing the Toolkit','先验证板端 NPU 环境','7–10',`<p>${T('Use the prebuilt native case to separate device/runtime problems from Python and conversion problems. Choose both the model compiled for the chip and the executable built for the board OS and bitness.','先运行预编译 Native Case，将板端/运行库问题与 Python、转换问题分开。必须同时选择匹配芯片的 ADLA 模型，以及匹配 OS/位数的可执行程序。')}</p>${qsCode(nativeCase)}<p>${T('Expected: a Top-5 score list. The PDF example has class index 2 near 0.996094; use this as an example, not an exact cross-version requirement. An increased ADLA interrupt count is an additional activity check, not an operator-by-operator proof of NPU placement.','预期输出 Top-5 分数。PDF 示例中类别 2 约为 0.996094，该数值仅作参考，不要求跨版本完全一致。ADLA 中断计数增加可辅助确认设备活动，但不能证明每个算子都在 NPU 上执行。')}</p>`));
 chapters.push(qsSection('install','04','Get the repositories and install the Toolkit','获取仓库并安装 Toolkit','12–15',`<p>${T(native?'Run the conversion environment on the board. For storage-constrained boards, download only the wheel, requirements, YOLOX scripts and inputs while preserving their paths.':'Prepare an Ubuntu 20.04 / 22.04 host; the PDF installation walkthrough uses Ubuntu 22.04 and Python 3.10. Keep both repositories under the same workspace.',''+(native?'在板端准备转换环境。存储有限时可只下载 wheel、requirements、YOLOX 脚本及输入资源，并保持对应路径。':'准备 Ubuntu 20.04 / 22.04 主机；PDF 安装示例采用 Ubuntu 22.04 和 Python 3.10。两个仓库放在同一工作目录下。'))}</p>${qsCode(clone)}${qsNote('The commands use ~/workspace on the machine where they run. For PC conversion this is the Ubuntu PC; for board-native conversion it is the board. Downloaded models and scripts are still required for offline inference.','命令中的 ~/workspace 指当前执行机器的目录：PC 转换时在 Ubuntu PC，板端全流程时在板端。离线推理仍需提前准备好模型、脚本及输入资源。')}<h4>${T(native?'Install the board conversion package':'Install the PC conversion package',native?'安装板端转换包':'安装 PC 转换包')}</h4>${native?`<p>${T('Download requirements_aarch64.txt and the matching wheel from the directory below into one directory, then install.','先从下方目录将 requirements_aarch64.txt 和匹配 wheel 下载到同一目录，然后安装。')}</p>${qsLink('https://github.com/Amlogic-NN/amlnn-toolkit/tree/main/amlnn_toolkit/whl/aarch64','Board package directory','板端安装包目录')}`:''}${qsCode(native?installBoard:installHost)}${qsNote('Version 1.0.0 is the example wheel in PDF v0.1. If the repository now contains another release, select its matching requirements and CPython/architecture wheel. Confirm AMLNN imports before proceeding.','1.0.0 是 PDF v0.1 中的示例版本；如仓库已更新，请使用对应版本的 requirements 及匹配 Python/架构的 wheel。确认 AMLNN 导入成功后继续。')}`));
 chapters.push(qsSection('prepare','05','Prepare YOLOX, calibration data and inputs','准备 YOLOX、校准数据与输入','16, 18–19',`${qsCode(`cd ~/workspace/amlnn-model-playground/examples/yolox/model\nwget ${QS_CDN}/model_zoo/yolox/yolox_s.onnx\ncd ../py\nls export_adla.py yolox_inference.py\nls ../input`)}<p>${T('Prepare representative detection images and the detection_dataset.txt list before W8A8 conversion. Check each listed path from the conversion working directory. Do not substitute an unreviewed random dataset.','进行 W8A8 转换前，准备有代表性的检测图像和 detection_dataset.txt 列表，并从转换执行目录检查每条路径。不要使用未经验证的随机数据替代。')}</p>${qsLink('https://github.com/Amlogic-NN/amlnn-model-playground/tree/main/resource','Calibration resource instructions','校准数据准备说明')}${table([T('File or directory','文件 / 目录'),T('Purpose','用途')],[['examples/yolox/model/yolox_s.onnx',T('Source model','原始模型')],['resource/detection_dataset.txt',T('Calibration input list; prepare the actual images','校准样本路径列表，需准备对应图像')],['examples/yolox/py/export_adla.py',T('Conversion script','转换脚本')],['examples/yolox/py/yolox_inference.py',T('Python inference script','Python 推理脚本')],['examples/yolox/input/',T('Test images','测试图像')]])}`));
 chapters.push(qsSection('convert','06','Convert ONNX to ADLA','将 ONNX 转换为 ADLA','16, 18–19',`<p>${T('Run on the conversion machine selected above. Target platform '+quickPlatform+' is selected for '+platform[1]+'.','在上面选择的转换机器执行。当前 '+platform[1]+' 对应目标平台编号 '+quickPlatform+'。')}</p>${qsCode(conversion)}${table([T('Current flag','当前参数'),T('Meaning','含义')],[['--onnx',T('Path to source ONNX','原始 ONNX 模型路径')],['--dataset-path',T('Calibration sample list','校准样本列表')],['--target-platform',T('Three-digit platform ID; not the full PRODUCT_PID string','三位平台编号，而非完整 PRODUCT_PID 字符串')],['--output-dir',T('Output directory for compiled ADLA','ADLA 输出目录')]])}${qsNote('The PDF uses --adla for the export directory; the current YOLOX README uses --output-dir. Current inference uses --adla instead of the PDF’s --model-path. Always check --help in the exact script revision you downloaded. Expected output for yolox_s.onnx with W8A8: ../model/yolox_s_w8a8.adla.','PDF 转换命令用 --adla 指定输出目录，当前 YOLOX README 改为 --output-dir；当前推理参数用 --adla，而非 PDF 中的 --model-path。请先查看实际下载版本的 --help。yolox_s.onnx 采用 W8A8 时，预期输出为 ../model/yolox_s_w8a8.adla。')}${qsLink(yolox,'Current YOLOX example','当前 YOLOX 示例文档')}`));
 let execution='';
 if(quickMode==='nnserver')execution=`<p>${T('Start nnserver on the board in a separate terminal. Leave it running while executing the PC inference client.','在独立终端启动板端 nnserver，运行 PC 推理客户端期间保持该服务运行。')}</p>${qsCode(`sudo apt-get update\nsudo apt-get install adb\nadb version\nadb devices\ncd ~/workspace/amlnn-toolkit\nadb shell "mkdir -p /data/nn"\nadb push ${nnPath} /data/nn/nnserver\nadb shell "chmod +x /data/nn/nnserver"\nadb shell "cd /data/nn && ./nnserver"`)}<p>${T('Expected listening ports: 8307, 8308, 8309 and 8310. A bind error may indicate an existing instance.','预期监听端口：8307、8308、8309、8310。bind 错误可能表示已有实例。')}</p><h4>${T('On the PC: switch the Python runtime mode','在 PC：切换 Python Runtime 模式')}</h4><p>${T('In yolox_inference.py, locate the init_runtime call. Preserve the rest of the script and set nnserver mode before running.','在 yolox_inference.py 中找到 init_runtime 调用，保持脚本其他逻辑不变，设置 nnserver 模式后执行。')}</p>${qsCode('amlnn.init_runtime(mode="nnserver", enable_perf=True)')}${qsCode(run)}`;
 if(native||lite)execution=`<p>${T(native?'Run the following on the board, using the environment installed in chapter 04.':'Transfer the compiled model and the YOLOX Python example to the board, preserving model/, py/ and input/ paths. Install the lightweight inference wheel on the board, then run the example.',''+(native?'在板端使用第 04 节安装的环境执行下方命令。':'将已编译模型、YOLOX Python 示例及输入图像传到板端，保留 model/、py/、input/ 目录关系。在板端安装轻量推理 wheel，再运行示例。'))}</p>${lite?qsLink(DOC_BASE+'amlnn_toolkit_lite/amlnn_edge_toolkit_lite/readme.md','Python Lite installation guide','Python Lite 安装指南')+qsCode('# On the board; use the matching release wheel\npip install /path/to/amlnn_edge_toolkit_lite-1.0.0-cp310-cp310-linux_aarch64.whl'):''}${qsCode('amlnn.init_runtime(mode="native", enable_perf=True)')}${qsCode(run)}${qsNote('The init_runtime line belongs inside the Python example, not in the shell. Use native mode on the board; no nnserver process is required.','init_runtime 这一行应在 Python 示例内设置，不能直接作为 Shell 命令执行。板端使用 native 模式，无需 nnserver。')}`;
 if(cpp){const build=qsOS==='android'?`./build-android.sh${qsBits==='32'?' -a armeabi-v7a':''}`:qsOS==='yocto'?`./build-linux.sh -m yocto${qsBits==='32'?' -b 32':''} -s /path/to/yocto_sdk_root -t /path/to/toolchain.cmake`:`./build-linux.sh${qsBits==='32'?' -b 32':''}`;const out=qsOS==='android'?`build/android/${qsBits==='64'?'arm64-v8a':'armeabi-v7a'}/yolox_demo`:`build/${qsOS==='yocto'?'yocto':'linux'}/${qsBits}/yolox_demo`;
 execution=`<p>${T('Compile on the Ubuntu host with the toolchain matching your board release. This route needs neither Python nor nnserver for model inference on the board.','在 Ubuntu 主机使用与板端 Release 匹配的工具链交叉编译；板端模型推理不依赖 Python 或 nnserver。')}</p>${table([T('Board OS','板端系统'),T('Toolchain setup','工具链配置')],[['Android',T('PDF: NDK r25c; current YOLOX README recommends r27d. Match your project release and set ANDROID_NDK_PATH.','PDF 示例为 NDK r25c，当前 YOLOX README 推荐 r27d。按项目 Release 选择，并配置 ANDROID_NDK_PATH。')],['Buildroot',T('Matching GCC, glibc/libstdc++ and ABI. PDF reference: GCC 10.3. Prefer the toolchain supplied with the board release.','匹配 GCC、glibc/libstdc++ 与 ABI。PDF 参考版本为 GCC 10.3，优先使用板端 Release 随附工具链。')],['Armbian / Yocto',T('Matching GCC or Yocto SDK; Yocto mode needs the SDK root and CMake toolchain file.','使用匹配的 GCC 或 Yocto SDK；Yocto 模式需提供 SDK 根目录及 CMake toolchain 文件。')]])}${qsCode(`sudo apt-get update\nsudo apt-get install cmake\ncmake --version\nexport AMLNN_HOME=$HOME/workspace/amlnn-toolkit/amlnn_runtime\n${qsOS==='android'?'export ANDROID_NDK_PATH=/path/to/android-ndk':qsOS==='yocto'?'# Install the matching Yocto SDK and provide paths below.':'export PATH=/path/to/matching-cross-toolchain/bin:$PATH'}\ncd ~/workspace/amlnn-model-playground/examples/yolox/cpp\n${build}\nls ${out}`)}${qsNote('Install the correct OpenCV dependency under dependency/opencv as required by the current example. Build output paths differ between the PDF and the latest README; the commands use the latest documented paths. Replace all /path/to placeholders before running.','按当前示例要求在 dependency/opencv 准备匹配的 OpenCV 依赖。PDF 与最新 README 的产物路径有差异，下方采用最新文档路径。执行前替换全部 /path/to 占位路径。')}<h4>${T('Transfer assets from the PC','从 PC 传输资源')}</h4>${qsCode(`adb shell "mkdir -p /data/local/tmp/yolox"\nadb push ${out} /data/local/tmp/yolox/\nadb push ../model/yolox_s_w8a8.adla /data/local/tmp/yolox/\nadb push ../input /data/local/tmp/yolox/\nadb shell\ncd /data/local/tmp/yolox\nchmod +x yolox_demo\nexport LD_LIBRARY_PATH=${library}:$LD_LIBRARY_PATH\n./yolox_demo yolox_s_w8a8.adla input\nexit`)}${qsNote('If /data/local/tmp is not writable or does not exist on your Linux image, use another writable directory and adjust every transfer/run path consistently. Inspect missing shared libraries with ldd on Linux where available.','如果 Linux 镜像不提供 /data/local/tmp 或该路径不可写，请改用其他可写目录，并一致调整全部传输和运行路径。Linux 上可用 ldd 检查缺失动态库。')}`;}
 chapters.push(qsSection('run','07','Deploy and run the selected path','按所选路线部署并运行','20–28',execution));
 chapters.push(qsSection('verify','08','Inspect results and performance','检查结果与性能','28–29',`<p>${T('Check model loading, input/output tensor attributes, detection results and timing logs. Current YOLOX examples save annotated images in a <model_name>_result directory; use the directory printed by your script instead of assuming the PDF’s older test_result.jpg path.','检查模型加载、输入输出张量属性、检测结果及耗时日志。当前 YOLOX 示例会把标注图像保存到 <model_name>_result 目录，请以实际脚本输出路径为准，不要假设仍是 PDF 旧版的 test_result.jpg。')}</p>${qsCode('# From the PC; replace the result directory with the actual output\nadb pull /data/local/tmp/yolox/yolox_s_w8a8_result ./yolox_results')}<p>${T('For Python runs, retrieve results from the working directory reported by the script. Compare the annotated boxes against the expected image, not just whether the process exited successfully. Model-only timing and full-pipeline latency are different measurements.','Python 运行结果请从脚本实际工作目录获取。检查检测框是否合理，而不只是进程是否退出成功。纯模型耗时和完整链路延迟是不同口径。')}</p>${qsResultFigure()}${openButton('performance','View published benchmarks','查看公开评测')}`));
 chapters.push(qsSection('camera','09','Optional: USB camera detection demo','可选：USB 摄像头实时检测','17',`<p>${T('The PDF includes a packaged YOLOX camera example. Download and extract it, then follow its README for camera, dependency and runtime setup.','PDF 提供 YOLOX 摄像头示例包，下载解压后按包内 README 完成摄像头、依赖及运行配置。')}</p>${qsCode(`wget ${QS_CDN}/Quick_Start/examples/yolox_camera.tar.gz\ntar -xzf yolox_camera.tar.gz\n# Read README_CN.md or README.md inside the extracted directory`)} `));
 chapters.push(qsSection('help','10','Common checks and next steps','常见问题与下一步','30',`<ul class="qs-checks"><li>${T('ADB cannot see the device: check the data cable, USB port and authorization. If using a container, avoid competing ADB servers on the host and container.','ADB 无法识别：检查数据线、USB 端口及授权。使用容器时，避免主机和容器中的 ADB server 争用设备。')}</li><li>${T('nnserver connection failure: check the executable OS/bitness, service process, ports and runtime libraries.','nnserver 连接失败：检查可执行文件的 OS/位数、服务进程、端口和运行库。')}</li><li>${T('Conversion fails: check target platform, model format, script --help, supported operators and calibration file paths.','转换失败：检查目标平台、模型格式、脚本 --help、算子支持及校准数据路径。')}</li><li>${T('Incorrect detections: check preprocessing, calibration samples and output decoding against the example.','检测错误：对照示例检查预处理、校准样本和输出解码。')}</li></ul><div class="source-links">${openButton('troubleshoot','Open troubleshooting','打开排查指引')}${openButton('start','Open Doc Center','打开文档中心')}${qsLink(pdf,'Read the source PDF','阅读原始 PDF')}${qsLink(yolox,'Current YOLOX README','当前 YOLOX README')}</div>`));

 host.innerHTML=`<div class="learn-intro"><div class="eyebrow">QUICK START · PDF v0.1</div><h2>${T('CNN Quick Start · YOLOX','CNN 快速入门 · YOLOX')}</h2><p>${T('Follow the Quick Start PDF through board validation, YOLOX conversion and deployment. Choose one path and follow the generated commands.','依据 Quick Start PDF，从板端验证开始，逐步完成 YOLOX 转换、部署与结果验证。先选择一条部署路线，再按生成的命令操作。')}</p><div class="source-links">${qsLink(pdf,'Quick Start PDF · v0.1','Quick Start PDF · v0.1')}${qsLink(yolox,'Current example reference','当前示例参考')}</div></div>${qsNote('Source: Amlogic NPU Quick Start Guide v0.1, 2026-06-25. Page references use physical PDF page numbers. Commands are adapted to the current YOLOX README where explicitly noted. These are instructions, not commands executed by this page.','来源：Amlogic NPU Quick Start Guide v0.1，2026-06-25。页码按 PDF 实际页序计数。明确标注处根据当前 YOLOX README 调整命令。本页只提供操作说明，不会自动执行命令。')}<div class="source-links">${openButton('quick','← Quick Start','← 新手快速入门')}${openButton('quick-llm','LLM Quick Start →','LLM 快速入门 →')}</div>${qsOrientation()}<nav class="qs-toc" aria-label="Quick Start chapters">${[['routes','Deployment path','部署方式'],['check','Environment','环境确认'],['native','Native validation','快速验证'],['install','Installation','工具安装'],['prepare','Model & data','模型与数据'],['convert','Conversion','模型转换'],['run','Deployment','部署运行'],['verify','Validation','结果验证'],['camera','USB camera','USB 摄像头'],['help','Help','问题排查']].map(([id,en,zh],i)=>`<a href="#qs-${id}">${String(i+1).padStart(2,'0')} ${T(en,zh)}</a>`).join('')}</nav><div class="qs-body">${chapters.join('')}</div>`;
 bindPortalLinks(host);
 host.querySelector('#quick-platform').onchange=e=>{quickPlatform=e.target.value;renderQuick()};host.querySelector('#quick-mode').onchange=e=>{quickMode=e.target.value;renderQuick()};host.querySelector('#qs-os').onchange=e=>{qsOS=e.target.value;renderQuick()};host.querySelector('#qs-bits').onchange=e=>{qsBits=e.target.value;renderQuick()};
 host.querySelectorAll('[data-copy]').forEach(b=>b.onclick=async()=>{const text=b.parentElement.querySelector('code').textContent;try{await navigator.clipboard.writeText(text);b.textContent=T('Copied','已复制')}catch{b.textContent=T('Select and copy the code','请选中代码复制')}});
}

const FAQ=[
['setup','Wheel installation fails','wheel 安装失败','Check Python version, OS and CPU architecture. A cp310 wheel needs CPython 3.10; linux_x86_64 is for the PC and linux_aarch64 is for the ARM board. Record the complete pip error and package filename.','核对 Python 版本、系统与 CPU 架构。cp310 对应 CPython 3.10；linux_x86_64 用于 PC，linux_aarch64 用于 ARM 板端。记录完整 pip 错误和安装包文件名。'],
['setup','Board is not visible over ADB','ADB 找不到板卡','Run adb devices. Check the USB connection, device-side ADB service and authorization. On Debian native mode, ADB is not required for Toolkit inference.','运行 adb devices，检查 USB 连接、板端 ADB 服务及授权。Debian 板端 native 模式推理不依赖 ADB。'],
['runtime','nnserver reports bind() error','nnserver 出现 bind() 错误','The Toolkit guide identifies an already-running nnserver as a cause. Check the process list and service configuration before restarting. Do not start multiple instances using the same port.','Toolkit 指南指出，已有 nnserver 进程可能导致该错误。先检查进程及服务配置，再决定是否重启，避免同端口重复启动。'],
['conversion','Unsupported operator or conversion failure','算子不支持或转换失败','Save the first failing operator, input shapes and conversion log. Compare with the supported operator list and the relevant model example. Confirm the input framework/export format and target platform before changing the graph.','保存首个失败算子、输入 shape 和转换日志，对照算子支持列表与对应示例。确认框架导出格式及目标平台后，再考虑调整计算图。'],
['conversion','Wrong platform or model fails to load','目标平台错误或模型加载失败','Check the physical chip against --target-platform and verify the ADLA package was compiled for it. Record compiler, SDK, kernel driver and libadla versions to investigate compatibility.','核对实际芯片与 --target-platform，并确认 ADLA 模型为该平台编译。收集 compiler、SDK、内核驱动及 libadla 版本，用于定位兼容性问题。'],
['accuracy','Model runs but results are incorrect','模型能运行但结果不正确','Compare preprocessing with the reference: RGB/BGR, resize, layout, dtype, normalization, scale and zero point. For calibrated activation quantization, supply representative calibration samples. The MobileNet guide warns that fallback random calibration can severely degrade accuracy.','对照参考示例检查 RGB/BGR、resize、数据排布、dtype、归一化、scale 和 zero point。需要校准的激活量化应提供有代表性的样本；MobileNet 指南指出，退回随机校准可能严重影响精度。'],
['runtime','Shared library cannot be found','找不到动态库','Check the exact missing library, process bitness and library search path. Use the runtime and libraries matching the board OS and ABI; follow the corresponding SDK deployment guide.','确认缺失库名称、进程位数及动态库搜索路径。使用与板端 OS 和 ABI 匹配的运行库，按对应 SDK 部署指南配置。'],
['performance','Performance differs from the published result','性能与公开数据不一致','Match the model variant, input shape, precision and test conditions first. Distinguish model-only timing from preprocessing, transfer and postprocessing. For LLMs, also match prompt length and output length.','先对齐模型规格、输入 shape、精度与测试条件。区分纯模型耗时与预处理、传输、后处理；LLM 还需要对齐输入和输出长度。']];
let faqFilter='all';
function renderTroubleshoot(){const host=document.getElementById('learning');const q=search.value.trim().toLowerCase();const rows=FAQ.filter(x=>(faqFilter==='all'||x[0]===faqFilter)&&x.join(' ').toLowerCase().includes(q));host.innerHTML=`<div class="source-links">${openButton('start','← Doc Center','← 文档中心')}</div><div class="learn-intro"><h2>${T('Find the failing stage first','先定位故障发生在哪一步')}</h2><p>${T('These checks are a starting point, not a promise that every error has the same cause. Keep the first complete error message.','以下是排查起点，不代表所有错误都由同一原因导致。请保留最早出现的完整错误信息。')}</p></div><div class="filters">${[['all','All','全部'],['setup','Setup','环境'],['conversion','Conversion','转换'],['runtime','Runtime','运行'],['accuracy','Accuracy','精度'],['performance','Performance','性能']].map(([id,en,zh])=>`<button data-faq="${id}" class="${faqFilter===id?'active':''}">${T(en,zh)}</button>`).join('')}</div><div class="faq-list">${rows.map(x=>`<details><summary>${T(x[1],x[2])}</summary><p>${T(x[3],x[4])}</p></details>`).join('')||T('No matching topics.','没有匹配的问题。')}</div><div class="issue-checklist"><h3>${T('Include this information when reporting an issue','反馈问题时请附上')}</h3><ul>${[T('Board / chip, OS, architecture and available memory','板卡 / 芯片、OS、架构及可用内存'),T('Toolkit / compiler / SDK / driver / libadla versions','Toolkit / compiler / SDK / 驱动 / libadla 版本'),T('Model source, input shapes, precision and platform ID','模型来源、输入 shape、量化精度及平台编号'),T('Exact command, complete error log and a minimal reproduction','实际命令、完整错误日志和最小复现步骤')].map(x=>'<li>'+x+'</li>').join('')}</ul><a class="link" href="https://github.com/Amlogic-NN/amlnn-toolkit/issues" target="_blank" rel="noopener noreferrer">${T('View Toolkit issues','查看 Toolkit Issues')} ↗</a></div><div class="source-links"><a class="link" href="${GUIDE_URL}" target="_blank" rel="noopener noreferrer">${T('Toolkit setup and FAQ','Toolkit 环境与 FAQ')} ↗</a>${openButton('start','Operator list and API references','算子列表与 API 文档')}</div>`;bindPortalLinks(host);host.querySelectorAll('[data-faq]').forEach(b=>b.onclick=()=>{faqFilter=b.dataset.faq;renderTroubleshoot()})}
const basePortalRender=renderCards;renderCards=function(){const learn=['quick','quick-intro','quick-cnn','quick-llm','troubleshoot'].includes(section);document.getElementById('learning').hidden=!learn;if(learn){particleCleanup();grid.hidden=true;document.getElementById('overview').hidden=true;document.getElementById('performance').hidden=true;document.querySelector('.toolbar').hidden=true;if(section==='quick')renderQuickLanding();else if(section==='quick-intro')renderQuickIntro();else if(section==='quick-cnn')renderQuick();else if(section==='quick-llm')renderLLMQuick();else renderTroubleshoot()}else basePortalRender()};

const ZH={
'Overview':'首页','Quick Start':'新手快速入门','Troubleshooting':'常见问题与排查','Performance':'性能与精度评测','Agent Examples':'Agent 示例','Skills / MCP':'技能 / MCP','Model Demos':'模型示例','SDK / Toolkit':'SDK / 工具链','ADLA Hub':'ADLA 模型中心','Doc Center':'文档中心',
'A guide to Amlogic AI development resources.':'Amlogic AI 开发资源导航。','Follow the PDF guide from environment checks to YOLOX conversion and deployment.':'依据 PDF，从环境确认到 YOLOX 转换与部署。','Find checks for setup, conversion, deployment and accuracy problems.':'排查环境、转换、部署及精度问题。','Explore model throughput, latency, memory and accuracy benchmarks.':'查看模型吞吐量、延迟、内存与精度评测。','Reference applications for building and extending on-device AI workflows.':'端侧 AI 应用场景与扩展示例。','Explore vision, audio and tool integration resources for your Agent.':'查看视觉、音频及工具集成资源。','Convert, quantize, compile and deploy models on Amlogic platforms.':'在 Amlogic 平台完成模型转换、量化、编译及部署。','Download precompiled ADLA model packages for your target platform.':'下载与目标芯片匹配的预编译 ADLA 模型包。','Development guides, SDK documentation, API references and deployment instructions.':'开发指南、SDK 文档、API 参考与部署说明。',
'AMLOGIC DEVELOPER RESOURCES':'AMLOGIC 开发资源','AI DEVELOPER PORTAL':'AI 开发者门户','GitHub ↗':'GitHub ↗','Amlogic Developer Resources':'Amlogic 开发资源','Explore GitHub ↗':'访问 GitHub ↗','Amlogic AI Development':'Amlogic AI 开发','SDKs, model examples, benchmarks and integration guides for Amlogic platforms.':'Amlogic 平台的 SDK、模型示例、评测数据与集成指南。','Publish & Customize':'发布与维护说明','All':'全部','Multimodal':'多模态','Vision':'视觉','Speech':'语音','Tool Calling':'工具调用','Audio':'音频','Tools':'工具','Toolchain':'工具链','Python SDK':'Python SDK','Serving':'模型服务','Model Platforms':'模型平台','Setup':'环境安装','Guides':'指南','SDK Documentation':'SDK 文档','API Reference':'API 参考','Operators':'算子支持','Deployment':'部署','Integration':'集成','Quantization':'量化','Benchmarks':'评测','Classification':'分类','Detection':'检测','Segmentation':'分割','Pose & Gesture':'姿态与手势','Image–Text':'图文匹配',
'Explore ↗':'查看资源 ↗','Explore':'查看','Coming Soon':'即将提供','Planned Example':'场景规划','Repository':'代码仓库','Documentation':'文档','PDF Guide':'PDF 指南','Supported':'已支持','Example':'示例','Model Repository':'模型仓库','Reference Scenario':'参考场景','Integration Guide':'集成指南','Model Playground':'Model Playground','Chinese':'中文','English':'英文','No matching resources. Try another keyword or category.':'没有匹配的资源，请尝试其他关键词或分类。','Search resources, capabilities, tags…':'搜索资源、能力或标签…','Search resources':'搜索资源','No matching sections.':'没有匹配的模块。',
'PERFORMANCE':'性能评测','Model Performance':'模型性能','Browse published benchmarks and test configurations.':'查看公开评测与测试配置。','Source data ↗':'原始数据 ↗','CNN Throughput':'CNN 吞吐量','LLM / VLM Runtime':'LLM / VLM 推理','CNN Accuracy Runs':'CNN 精度测试','LLM Perplexity':'LLM 困惑度','MMLU Accuracy':'MMLU 准确率','Metric':'指标','Test configuration':'测试配置','Export filtered CSV ↓':'导出筛选后的 CSV ↓','Visible records':'当前记录数','Highest selected value':'当前指标最高值','Lowest selected value':'当前指标最低值','Data snapshot':'数据快照','Nov 6, 2026':'2026 年 11 月 6 日','From Model Playground · no live polling':'来自 Model Playground · 非实时更新','Zero baseline · hover for values':'坐标从零开始 · 悬停查看数值','Benchmark data':'评测数据','Click a column heading to sort':'点击表头排序','Memory vs. throughput':'内存与吞吐量','One point per model · hover for details':'每个点对应一个模型 · 悬停查看详情','No matching records. Clear the search to see all data.':'没有匹配数据，清空搜索可查看全部记录。',
'Model':'模型','Input shape':'输入形状','Precision':'精度格式','Platform':'平台','SeqLen':'输入长度','Max context':'最大上下文','New tokens':'生成 Token 数','TTFT (ms)':'首 Token 延迟 (ms)','Tokens/s':'Token/秒','Memory (MB)':'内存 (MB)','Bandwidth (MB)':'数据量 (MB)','Latency (ms)':'延迟 (ms)','Task':'任务','Validation':'验证数据','Accuracy metrics':'精度指标','Delta':'变化量','No results':'无结果',
'CNN FPS includes hardware and software execution time. Input shapes and precision vary by model. Compare platforms within the same model row.':'CNN FPS 包括硬件与软件执行时间。各模型输入形状、精度不同；跨平台比较请针对同一模型。',
'A9 (A311Y3), Armbian reference board, 8 GB / 16 GB configurations; W4A16, native model runtime test. Select one sequence/context/output configuration. VLM rows are not complete image-pipeline benchmarks.':'测试平台为 A9 (A311Y3) Armbian 参考板，8 GB / 16 GB 配置；W4A16 原生模型推理测试。请选择同一输入/上下文/输出配置。VLM 数据不代表完整图像处理链路。',
'Accuracy-run measurements are separate from the CNN throughput table. Dataset subsets and metrics differ; full metrics appear in the table. Bandwidth is reported in MB by the source, not MB/s.':'精度测试与 CNN 吞吐量表来自不同测试。各数据子集与指标不同，完整指标见表格。原文 Bandwidth 的单位为 MB，而非 MB/s。',
'wiki-text2, 300,258 tokens. Lower PPL is better. Baseline and ADLA values are plotted together; delta = ADLA − baseline.':'wiki-text2 数据集，300,258 Token。PPL 越低越好。图表对比基准与 ADLA；变化量 = ADLA − 基准。',
'5-shot, 500 samples. GGUF FP16 tested on PC GPU; ADLA W4A16 on A311Y3. Higher is better. Delta is recalculated in percentage points, not relative percent.':'5-shot，500 个样本。GGUF FP16 在 PC GPU 测试，ADLA W4A16 在 A311Y3 测试。越高越好；变化量以百分点计算，而非相对百分比。',
'Got it':'知道了','Reference scenario cards describe possible application workflows. They do not imply released projects or one-click deployment.':'参考场景用于说明可能的应用流程，不表示项目已经发布或支持一键部署。'
};
for(const [id,en,zh,desc,descZh,sub,subZh] of NEW_MODULES){ZH[en]=zh;ZH[desc]=descZh;ZH[sub]=subZh;}
const sdkDescriptions={
'Amlogic NN Toolkit':'完整模型工具链，支持模型转换、量化、编译和推理；安装方法与平台支持范围请查看组件文档。',
'NN Edge Toolkit Lite':'面向 Debian 板端的轻量 Python 推理 SDK，主要用于 CNN 等模型。',
'LLM Edge Toolkit Lite':'面向 Debian 板端的轻量 Python LLM 推理 SDK，支持流式输出、多轮对话、采样配置与聊天模板。',
'NN Runtime · C/C++':'通过 libnnsdk.so 与 nnsdk2.h 接入原生推理，查看 Android / Linux 配置、编译和基础 API 示例。',
'LLM Runtime · C/C++':'通过 libllmsdk.so 与 llmsdk.h 接入大模型推理，查看流式回调、多轮对话和基础 API 示例。',
'Amlogic Agent Server':'OpenAI 兼容的端侧 LLM/VLM 服务，提供流式输出、工具调用、ASR 与 KV Cache 复用；可选端云路由处于实验阶段。'};
for(const r of RESOURCES){if(r.section==='sdk'&&sdkDescriptions[r.name])ZH[r.desc]=sdkDescriptions[r.name];if(r.section==='start'){const name=r.name.replace(' · Documentation','');if(sdkDescriptions[name])ZH[r.desc]=sdkDescriptions[name];if(r.en)ZH[r.en]=r.en.replace('PDF Documentation','PDF 文档');}if(r.section==='models')ZH[r.desc]=r.name.includes('Hugging')?'Amlogic ADLA 模型仓库。请根据目标芯片和 SDK 文档选择适用模型包。':'ModelScope 上的 Amlogic ADLA 模型仓库；Agent Server 文档提供 bootstrap 下载方法。';}
const zhNames={'AI NAS Agent':'AI NAS 智能体','AI Shopping Agent':'AI 购物智能体','Meeting Summary':'会议摘要','Agent Client Integration':'Agent 客户端接入','Home Voice Assistant':'家庭语音助手','OCR Translate':'OCR 翻译','Vision Skills':'视觉技能','Audio Skills':'音频技能','MCP Tools':'MCP 工具'};
const zhAgentDesc=['探索家庭存储场景下的本地媒体检索与内容管理，包括图像检索、人物查找和媒体摘要。','商品视觉识别、信息查询与推荐的参考场景。','组合语音转写、说话人区分与会议摘要的参考流程。','接入兼容 OpenAI 的 Agent 客户端，并在应用侧完成工具执行与结果回传。','组合 ASR、LLM 和 TTS 的语音交互参考，可按产品需求扩展设备控制。','从图像中提取文字，再交给语言模型处理的参考流程。'];RESOURCES.filter(r=>r.section==='agents').forEach((r,i)=>{if(zhAgentDesc[i])ZH[r.desc]=zhAgentDesc[i]});
function translateUI(input){if(portalLang!=='zh')return input;const lead=input.match(/^\s*/)[0],trail=input.match(/\s*$/)[0];let t=input.trim();if(!t)return input;if(ZH[t])return lead+ZH[t]+trail;if(zhNames[t])return lead+zhNames[t]+trail;
if(/^\d+ resources$/.test(t))return t.replace(' resources',' 项资源');if(/^\d+ supported models$/.test(t))return t.replace(' supported models',' 个支持模型');if(/^\d+ document entries$/.test(t))return t.replace(' document entries',' 项文档条目');if(t.includes('model comparison')||t.endsWith(' comparison'))t=t.replace(' comparison','对比');
t=t.replace(/All (\d+) models in the Model Playground support list\. Search by model name, quantization or platform\. Updated October 12, 2026\./,'Model Playground 支持列表共 $1 项模型，可按名称、量化格式或平台搜索。数据日期：2026 年 10 月 12 日。');
t=t.replace('See the shared LLM example guide for model setup and inference.','查看统一 LLM 示例指南，了解模型配置和推理流程。').replace('Explore model conversion, deployment and inference in the dedicated example directory.','在对应示例目录查看模型转换、部署与推理流程。').replace('Supported platforms:','支持平台：');
t=t.replace(/Open the (english|chinese)-language (.*?) for Amlogic NPU development\./i,(_,lang,title)=>'查看'+(lang.toLowerCase()==='chinese'?'中文':'英文')+'版 '+title+'，了解 Amlogic NPU 开发方法。');
for(const [en,zh] of Object.entries({'NPU Quick Start':'NPU 快速入门','NPU User Guide':'NPU 用户指南','AMLNN API Reference':'AMLNN API 参考','NNSDK2 API Reference':'NNSDK2 API 参考','Supported Operator List':'支持算子列表','Android Deployment Guide':'Android 部署指南','LiteRT Guide':'LiteRT 指南','Quantization Guide':'量化指南','LLM User Guide':'LLM 用户指南','Platform Build Guide':'平台编译指南','Chinese':'中文','English':'英文','Documentation':'文档','Speech Recognition':'语音识别','Object Detection':'目标检测','Image Segmentation':'图像分割','Pose Estimation':'姿态估计','Classification':'分类','Image-Text Matching':'图文匹配','Throughput':'吞吐量','tokens/s':'Token/秒','Seq ':'输入 ','Context ':'上下文 ','Output ':'输出 ','Memory':'内存'}))t=t.split(en).join(zh);
return lead+t+trail;}
function applyPortalLanguage(){if(typeof NodeFilter==='undefined')return;document.documentElement.lang=portalLang==='zh'?'zh-CN':'en';const walk=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);let node;while(node=walk.nextNode()){if(!node.parentElement||node.parentElement.closest('script,style,pre,code,[data-no-i18n]'))continue;const current=node.nodeValue;let state=translationNodes.get(node);if(!state||current!==state.last)state={en:current,last:current};const translated=translateUI(state.en);if(current!==translated)node.nodeValue=translated;state.last=translated;translationNodes.set(node,state);}const input=document.getElementById('search');input.placeholder=T('Search resources, capabilities, tags…','搜索资源、能力或标签…');input.setAttribute('aria-label',T('Search resources','搜索资源'));const button=document.getElementById('language-toggle');if(button){button.textContent=portalLang==='zh'?'English':'中文';button.setAttribute('aria-label',T('Switch to Chinese','切换至英文'));}}
Object.assign(ZH,{
'Vision Skills':'视觉技能','Audio Skills':'音频技能','MCP Tools':'MCP 工具','A resource placeholder for on-device detection, recognition and OCR skills, including integration instructions.':'用于组织端侧检测、识别、OCR 技能及集成指南的资源入口，文档待补充。','A resource placeholder for speech recognition, speech synthesis and speaker-related skills.':'用于组织语音识别、语音合成及说话人相关技能的资源入口，文档待补充。','A resource placeholder for MCP service setup, tool definitions and custom integration examples.':'用于组织 MCP 服务部署、工具定义和自定义集成示例的资源入口，文档待补充。',
'Configure cross-compilation toolchains and build Model Playground examples for your target platform.':'配置交叉编译工具链，并为目标平台编译 Model Playground 示例。','Set up toolchains and build model examples for the target platform.':'配置工具链，并编译目标平台的模型示例。','Upload this file as':'将此文件上传为','Upload this file as index.html to the root of your amlogic-nn.github.io repository.':'将此文件以 index.html 为名上传到网站仓库根目录。','Open Settings → Pages. Select Deploy from a branch, main, and /(root). Save.':'打开 Settings → Pages，选择 Deploy from a branch、main 和 /(root)，然后保存。','Cards without a URL show “Coming Soon”. Check each resource against its project documentation before publishing.':'没有链接的卡片显示“即将提供”；发布前请对照项目文档核实每项资源。','Only confirmed public resources should have public links and release status.':'公开链接和发布状态应以项目实际公开情况为准。','Classification results':'分类结果','Memory vs. throughput':'内存与吞吐量'
});
Object.assign(ZH,{
'Build on the edge.':'在边缘构建。',
'Start here.':'从这里开始。',
'One place for the tools, models and documentation you need to develop on Amlogic platforms.':'汇集在 Amlogic 平台上开发所需的工具、模型与文档。',
'Explore documentation':'查看文档',
'Browse models →':'浏览模型 →','Browse models':'浏览模型',
'THE DEVELOPMENT STACK':'开发技术栈',
'Applications':'应用层',
'Agents / Skills / MCP':'Agent / 技能 / MCP',
'Interfaces':'接口层',
'Python / C++ / OpenAI API':'Python / C++ / OpenAI API',
'Models & Runtime':'模型与运行时',
'CNN / LLM / VLM / ADLA':'CNN / LLM / VLM / ADLA',
'ON-DEVICE INFERENCE':'端侧推理',
'Supported model entries':'已支持模型',
'Documentation resources':'文档资源',
'SDK integration paths':'SDK 集成方式',
'Agent Server interface':'Agent Server 接口',
'Find your next step':'下一步做什么？',
'Explore the developer ecosystem':'浏览开发者生态',
'BUILD & INTEGRATE':'构建与集成',
'EXPLORE & RUN':'探索与运行',
'MEASURE & COMPARE':'测量与对比',
'DOWNLOAD & DEPLOY':'下载与部署',
'READ & LEARN':'阅读与学习',
'CONNECT & EXTEND':'接入与扩展',
'TOOLS & CAPABILITIES':'工具与能力',
'From model conversion to native inference. Choose the right Python or C/C++ interface.':'从模型转换到原生推理，选择合适的 Python 或 C/C++ 接口。',
'Find example code, quantization formats and platform support for your model.':'查找模型的示例代码、量化格式与平台支持。',
'Inspect throughput, latency, memory and accuracy under documented test conditions.':'在已记录的测试条件下查看吞吐量、延迟、内存与精度。',
'Precompiled model packages, available on Hugging Face and ModelScope.':'预编译模型包，可在 Hugging Face 与 ModelScope 获取。',
'Quick starts, API references, operator lists and deployment guides in one place.':'集中查看入门、API 参考、算子列表与部署指南。',
'Reference scenarios and an OpenAI-compatible Agent client integration guide.':'参考应用场景，以及兼容 OpenAI 的 Agent 客户端接入指南。',
'Discover vision, audio and tool integration resources for your applications.':'了解适用于应用的视觉、音频与工具集成资源。',
'Python · C/C++':'Python · C/C++',
'CNN · LLM · VLM':'CNN · LLM · VLM',
'2 model repositories':'2 个模型仓库',
'Application workflows':'应用工作流',
'Published links coming soon':'公开链接敬请期待',
'Explore →':'查看 →',
'New to the terminology?':'这些术语是什么意思？',
'Open a term for a plain-language explanation.':'点击术语，查看简明解释。',
'How the Amlogic NPU software stack fits together.':'Amlogic NPU 软件栈的整体结构。',
'01 · APPLICATION':'01 · 应用层','02 · SOFTWARE':'02 · 软件层','03 · DEVICE':'03 · 设备层',
'Native · ADLA':'Native · ADLA','Framework runtime':'框架运行时'
});
Object.assign(ZH,{'Community & Support':'社区与支持','Developer community channels are being set up.':'开发者社区正在创建中，敬请期待。','QQ Group':'QQ 群','Chinese developer community':'中文开发者社区','International developer community':'国际开发者社区','Being created':'正在创建中','Join community ↗':'加入社区 ↗'});
const translationNodes=new WeakMap();
function initCommunity(){const items=document.querySelectorAll('.community-option');['qq','discord'].forEach((key,i)=>{const url=safeURL(COMMUNITY_LINKS[key]);if(url&&items[i]){const status=items[i].querySelector('.community-status');const link=document.createElement('a');link.href=url;link.target='_blank';link.rel='noopener noreferrer';link.className='link';link.textContent='Join community ↗';status.replaceWith(link);}});}
function initLanguage(){const b=document.getElementById('language-toggle');if(!b||typeof MutationObserver==='undefined')return;b.onclick=()=>{portalLang=portalLang==='en'?'zh':'en';try{localStorage.setItem('amlogic-language',portalLang)}catch{}selectSection(section);applyPortalLanguage()};let scheduled=false;const observer=new MutationObserver(()=>{if(scheduled)return;scheduled=true;queueMicrotask(()=>{observer.disconnect();applyPortalLanguage();observer.observe(document.body,{childList:true,subtree:true,characterData:true});scheduled=false})});applyPortalLanguage();observer.observe(document.body,{childList:true,subtree:true,characterData:true});}


// Troubleshooting belongs to the documentation hierarchy.
const docCenterRender=renderCards;
renderCards=function(){docCenterRender();if(section==='start'){grid.insertAdjacentHTML('afterbegin',`<article class="card doc-subpage"><div class="card-thumb-gen" aria-hidden="true"><span class="ct-kicker">${T('Guide','指引')}</span><span class="ct-title">${T('Troubleshooting','常见问题与排查')}</span></div><div class="card-top"><span class="icon" style="background:#4884bd">${svg('book')}</span><span class="status ready">${T('Guide','指引')}</span></div><h3>${T('Troubleshooting','常见问题与排查')}</h3><p class="desc">${T('Resolve common setup, conversion, runtime and accuracy problems.','按环境、转换、运行与精度阶段，定位常见问题并查看排查方法。')}</p><div class="card-bottom"><span class="meta">${T('Doc Center · Subpage','文档中心 · 子页面')}</span>${openButton('troubleshoot','Open guide','查看排查指引')}</div></article>`);bindPortalLinks(grid)}};


SECTIONS.splice(SECTIONS.findIndex(s=>s.id==='agents'),0,{id:'agent',name:'Agent',icon:'grid',desc:'Explore Agent Server and reference applications.'},{id:'agent-server',name:'Agent Server',icon:'layers',desc:'Start with the service repository, then connect your Agent client.'});
Object.assign(ZH,{'License Plate Recognition':'车牌识别','C/C++ SDK':'C/C++ SDK','Getting Started':'入门','GitHub Repository':'GitHub 仓库','Developer Documentation':'开发者文档','Model Playground · CNN':'Model Playground · CNN','Model Playground · LLM':'Model Playground · LLM','Model Playground · VLM':'Model Playground · VLM','Serving Resource':'服务资源','Skills Resource':'技能资源','Tool Integration':'工具集成','Hugging Face':'Hugging Face','ModelScope':'ModelScope'});
Object.assign(ZH,{'Agent':'智能体','Agent Server':'Agent 服务','Explore Agent Server and reference applications.':'了解 Agent 服务与参考应用。','Start with the service repository, then connect your Agent client.':'从服务仓库开始，再接入 Agent 客户端。'});
const agentModule=NEW_MODULES.find(x=>x[0]==='agents');agentModule[0]='agent';agentModule[1]='Build an Agent application';agentModule[2]='构建 Agent 应用';agentModule[3]='Start with Agent Server, then explore reference application workflows.';agentModule[4]='先了解与搭建 Agent Server，再运行参考应用。';agentModule[5]='Agent Server / Agent Examples';agentModule[6]='Agent 服务 / Agent 示例';
const agentRepository=RESOURCES.find(r=>r.name==='Amlogic Agent Server');
function agentPageCard(id,title,desc,action){return `<article class="card"><div class="card-top"><span class="icon" style="background:#4884bd">${svg('layers')}</span></div><h3>${title}</h3><p class="desc">${desc}</p><div class="card-bottom">${openButton(id,action,action)}</div></article>`}
const agentPortalRender=renderCards;
renderCards=function(){agentPortalRender();if(['agent','agent-server'].includes(section)){particleCleanup();grid.hidden=true;document.getElementById('overview').hidden=true;document.getElementById('performance').hidden=true;document.querySelector('.toolbar').hidden=true;const host=document.getElementById('learning');host.hidden=false;if(section==='agent'){host.innerHTML=`<div class="learn-intro"><h2>${T('Build your Agent workflow','构建你的 Agent 工作流')}</h2><p>${T('Set up the model service, connect a client, and explore application examples.','搭建模型服务、接入客户端，再探索应用示例。')}</p></div><div class="grid">${agentPageCard('agent-server','Agent Server',T('Service overview, repository and client integration resources.','服务介绍、代码仓库与客户端接入资源。'),T('Explore server','了解服务'))}${agentPageCard('agents','Agent Examples',T('Explore AI NAS, AI Shopping, Meeting Summary and other reference scenarios.','浏览 AI NAS、AI Shopping、Meeting Summary 等参考应用场景。'),T('Browse examples','查看示例'))}</div>`}else{host.innerHTML=`<div class="source-links">${openButton('agent','← Agent','← 智能体')}</div><div class="learn-intro"><h2>Amlogic Agent Server</h2><p>${T('An on-device model service that connects Agent clients to Amlogic inference capabilities through an OpenAI-compatible interface.','通过兼容 OpenAI 的接口，将 Agent 客户端连接到 Amlogic 端侧模型推理能力。')}</p></div><div class="grid"><article class="card"><h3>${T('Service repository','服务仓库')}</h3><p class="desc">${T('Find setup instructions, supported capabilities and configuration in the maintained repository README.','在仓库 README 中查看部署步骤、支持能力与配置方法。')}</p><a class="link" href="${safeURL(agentRepository.url)}" target="_blank" rel="noopener noreferrer">GitHub ↗</a></article>${agentPageCard('agents',T('Connect and explore','接入与探索'),T('Open client integration resources and reference application scenarios.','查看客户端接入资源和参考应用场景。'),T('Open Agent Examples','查看 Agent 示例'))}${agentPageCard('start',T('Technical documentation','技术文档'),T('Read API references and development guides in Doc Center.','在文档中心查看 API 参考与开发指引。'),T('Open Doc Center','打开文档中心'))}</div>`}bindPortalLinks(host)}else if(section==='sdk'){const cards=grid.querySelectorAll('.card');const rows=RESOURCES.filter(r=>r.section==='sdk'&&(category==='All'||r.category===category)&&[r.name,r.en,r.desc,r.descZh||'',r.meta,r.platforms||'',...r.tags,...(r.links||[]).map(l=>l.label),translateUI(r.name),translateUI(r.desc),translateUI(r.category)].join(' ').toLowerCase().includes(search.value.trim().toLowerCase()));rows.forEach((r,i)=>{if(r===agentRepository&&cards[i]){const link=cards[i].querySelector('a.link');if(link){link.removeAttribute('target');link.href='#agent-server';link.onclick=e=>{e.preventDefault();search.value='';selectSection('agent-server')}}}})}};


function overviewIntroduction(){const pdf='https://github.com/Amlogic-NN/amlnn-toolkit/blob/main/doc/02_Amlogic_NPU_User_Guide_V0.1.pdf';return `<section class="ov-intro" aria-labelledby="intro-title"><div class="intro-eyebrow">AMLOGIC AI DEVELOPMENT</div><h2 id="intro-title">Introduction</h2><p class="intro-lead">${T('From your model to on-device intelligence.','从你的模型，到端侧智能应用。')}</p><p>${T('Amlogic provides the tools and runtimes to convert, evaluate and deploy AI models on its NPU platforms. Start with a supported model, prepare it for your target chip, then integrate inference into your application.','Amlogic 提供模型转换、评估与 NPU 部署所需的工具和运行库。从支持的模型出发，为目标芯片准备模型，再将推理能力接入你的应用。')}</p><div class="intro-stack" aria-label="Software stack"><div><small>01 · APPLICATION</small><strong>${T('Your application','你的应用')}</strong><span>${T('Vision · Audio · LLM / VLM · Agent','视觉 · 音频 · LLM / VLM · Agent')}</span></div><div><small>02 · SOFTWARE</small><strong>${T('Toolkit + Inference SDK','工具链 + 推理 SDK')}</strong><span>${T('Convert on PC or board · Integrate with Python or C/C++','PC 或板端转换 · Python 或 C/C++ 集成')}</span></div><div><small>03 · DEVICE</small><strong>Amlogic NPU</strong><span>${T('ADLA runtime · NPU driver · Target hardware','ADLA 运行时 · NPU 驱动 · 目标硬件')}</span></div></div><div class="intro-body"><div><h3>${T('How deployment works','如何完成部署')}</h3><ol class="intro-steps"><li><strong>${T('Verify your environment','确认环境')}</strong><span>${T('Check the chip, OS and driver / DDK version; choose an integration route.','检查芯片、操作系统与驱动 / DDK 版本，选择集成方式。')}</span></li><li><strong>${T('Prepare and convert','准备并转换模型')}</strong><span>${T('Export a supported model, prepare calibration data when quantizing, and compile for the target platform.','导出支持的模型；量化时准备校准数据，并面向目标平台编译。')}</span></li><li><strong>${T('Evaluate, then integrate','评估并集成')}</strong><span>${T('Check accuracy and performance. Complete preprocessing, inference and postprocessing in your application.','验证精度与性能，再在应用中完成预处理、推理与后处理。')}</span></li></ol></div><div class="intro-routes"><h3>${T('Choose an integration route','选择集成路径')}</h3><p><strong>Native · ADLA</strong><br>${T('Convert models ahead of time to .adla; load them using Python or native C/C++ SDKs.','提前将模型转换为 .adla，通过 Python 或原生 C/C++ SDK 加载运行。')}</p><p><strong>Framework runtime</strong><br>${T('Use an adapted framework such as LiteRT / NNAPI or ONNX Runtime. Availability depends on the chip, OS and release.','使用已适配的 LiteRT / NNAPI、ONNX Runtime 等框架；具体支持以芯片、系统和发布版本为准。')}</p></div></div><section class="intro-details"><h3>${T('Toolchain components','工具链组件')}</h3><div class="table-wrap"><table><thead><tr><th>${T('Component','组件')}</th><th>${T('Runs on','运行位置')}</th><th>${T('Purpose','用途')}</th></tr></thead><tbody>${[['amlnn_toolkit','x86_64 PC',T('Convert / quantize / export ADLA; evaluate via ADB. Includes GGUF conversion for LLM/VLM.','转换 / 量化 / 导出 ADLA，通过 ADB 评估；包含 LLM/VLM GGUF 转换。')],['amlnn_edge_toolkit',T('aarch64 board','aarch64 板端'),T('Convert, export and run ADLA on the device.','板端转换、导出并运行 ADLA。')],['amlnn_edge_toolkit_lite',T('aarch64 board','aarch64 板端'),T('Lightweight inference for compiled ADLA models.','已编译 ADLA 模型的轻量推理。')],['amlllm_edge_toolkit_lite',T('aarch64 board','aarch64 板端'),T('Python inference for LLM / VLM ADLA models.','LLM / VLM ADLA 模型的 Python 推理。')],['nn_runtime / llm_runtime',T('Target device','目标设备'),T('Native C/C++ integration: libnnsdk.so + nnsdk2.h, or libllmsdk.so + llmsdk.h.','原生 C/C++ 集成：libnnsdk.so + nnsdk2.h，或 libllmsdk.so + llmsdk.h。')]].map(r=>'<tr>'+r.map(c=>'<td>'+c+'</td>').join('')+'</tr>').join('')}</tbody></table></div><h4>${T('Hardware covered by the guide','本指南覆盖的硬件')}</h4><p>C308L / C302X · S928X · A311D2 · T968D4 · S905X5 / S905D5 · C302X2 · C305X2 / A123X · A311Y3</p><p>${T('The platform list describes the scope of User Guide v0.1; model and integration support must be checked separately.','此列表为 User Guide v0.1 的适用范围；具体模型和集成方式的支持情况需分别确认。')}</p><dl class="intro-terms"><div><dt>NPU</dt><dd>${T('Neural Processing Unit: the chip accelerator that executes neural-network computation.','神经网络处理单元：芯片中执行神经网络计算的加速器。')}</dd></div><div><dt>ADLA model</dt><dd>${T('A compiled Amlogic model package with the .adla extension.','面向 Amlogic 平台编译的模型文件，扩展名为 .adla。')}</dd></div><div><dt>W4A8 / W8A16</dt><dd>${T('W is weight precision; A is activation precision. W4A8 means 4-bit weights and 8-bit activations.','W 表示权重位宽，A 表示激活位宽。例如 W4A8 为 4 位权重与 8 位激活。')}</dd></div><div><dt>Preprocess / Postprocess</dt><dd>${T('Prepare model inputs (resize, normalize, tokenize); turn model outputs into results (NMS, token decoding).','将原始数据处理成模型输入（缩放、归一化、分词）；将模型输出解码成结果（NMS、文本解码）。')}</dd></div></dl></section>${overviewLongIntroduction()}<div class="source-links">${openButton('quick','Start the walkthrough','开始快速入门')}<a class="link" href="${pdf}" target="_blank" rel="noopener noreferrer">${T('User Guide · Chapter 1','用户指南 · 第一章')} ↗</a></div></section>`}



function guideFigure(name,en,zh){const label=(en,zh)=>T(en,zh);const box=(title,detail='',accent=false)=>`<div class="arch-box ${accent?'arch-accent':''}"><strong>${title}</strong>${detail?`<span>${detail}</span>`:''}</div>`;const group=(title,body)=>`<div class="arch-group"><h4>${title}</h4>${body}</div>`;const arrow='<div class="arch-arrow" aria-hidden="true">→</div>';let body='';if(name==='software-stack'){body=`<div class="arch-horizontal">${group(label('01 · Source models','01 · 源模型'),box('PyTorch', '.pt / .pt2')+box('ONNX')+box('TensorFlow / TFLite'))}${arrow}${group(label('02 · amlnn-toolkit','02 · amlnn-toolkit'),box(label('Import & quantize','导入与量化'))+box(label('Graph fusion & tiling','图融合与分块'))+box(label('Memory optimization','内存优化'))+box(label('Export ADLA','导出 ADLA'),'.adla',true))}${arrow}${group(label('03 · Edge device','03 · 边缘设备'),box(label('Application','应用'))+box('NNSDK / LLMSDK',label('Common inference APIs','统一推理接口'))+box('ADLA Runtime',label('ADLA user interface','ADLA 用户接口'))+box(label('NPU driver & OS abstraction','NPU 驱动与 OS 抽象层'),label('NN Core Driver · OSAI','NN Core Driver · OSAI'),true))}</div>`}else if(name==='integration-process'){body=`<div class="arch-horizontal">${group(label('01 · Preprocess · CPU','01 · 预处理 · CPU'),box(label('Image / camera','图片 / 相机'),'OpenCV · Resize · Mean / Std')+box(label('Text','文本'),'Tokenizer → Token IDs')+box(label('Audio','音频'),label('Samples → Time-frequency features','采样 → 时频特征'))+box(label('Input tensors','输入 Tensor'),label('Match shape, layout and dtype','对齐 Shape、布局与数据类型'),true))}${arrow}${group(label('02 · Inference','02 · 推理'),box('PC · Python',label('Load source model → Run','加载源模型 → 执行'))+box('Framework runtime',label('NNAPI / LiteRT · TFLite','NNAPI / LiteRT · TFLite'))+box('Native · NNSDK / LLMSDK',label('Load ADLA → NPU execution','加载 ADLA → NPU 执行'),true)+box(label('Output tensors','输出 Tensor')))}${arrow}${group(label('03 · Postprocess · CPU','03 · 后处理 · CPU'),box(label('Classification','分类'),'Top-1 / Top-5')+box(label('Detection','检测'),label('Decode boxes → NMS','边界框解码 → NMS'))+box(label('Language','语言'),label('Token IDs → Text','Token ID → 文本'))+box(label('Audio','音频'),label('Decode → Text / waveform / labels','解码 → 文本 / 波形 / 标签')))}</div>`}else{const stages=[['01','Check board status','确认板卡状态',['NPU driver','NPU device access','DDK / SDK version','Target chip'],['NPU 驱动','设备访问权限','DDK / SDK 版本','目标芯片']],['02','Confirm the operating system','确认操作系统',['Android','Buildroot','Debian','Yocto'],['Android','Buildroot','Debian','Yocto']],['03','Select an integration method','选择集成方式',['NNAPI','LiteRT','Native C/C++','Native Python','Third-party runtime'],['NNAPI','LiteRT','原生 C/C++','原生 Python','第三方运行时']],['04','Verify the pipeline','验证集成链路',['Framework example','Native inference example'],['框架示例','原生推理示例']],['05','Prepare and evaluate the model','准备并评估模型',['Quant / Float TFLite','Target-specific ADLA','Framework model'],['量化 / 浮点 TFLite','目标平台 ADLA','框架模型']],['06','Integrate the application','完成应用集成',['Preprocess','Inference','Postprocess','Validate results'],['预处理','推理','后处理','结果验证']]];body=`<div class="arch-steps">${stages.map(([n,en,zh,items,zhItems],i)=>`<div class="arch-step"><span class="arch-number">${n}</span><div class="arch-step-body"><h4>${label(en,zh)}</h4><div class="arch-step-options">${items.map((x,j)=>`<span>${label(x,zhItems[j])}</span>`).join('')}</div></div></div>${i<stages.length-1?'<div class="arch-down" aria-hidden="true">↓</div>':''}`).join('')}</div>`}return `<figure class="overview-architecture" aria-label="${label(en,zh)}"><div class="arch-title"><span>AMLOGIC</span><strong>${label(en,zh).replace(/^Figure 1\.[134] · /,'').replace(/^图 1\.[134] · /,'')}</strong></div>${body}<figcaption>${label('Redrawn from User Guide v0.1 · Chapter 1','依据 User Guide v0.1 第一章重绘')}</figcaption></figure>`}

function overviewLongIntroduction(){const sections=[["01 · Amlogic NPU Software Stack", "01 · Amlogic NPU 软件栈", [["Amlogic provides a software stack for converting, evaluating and deploying AI models on its NPU platforms. Developers can validate model accuracy and performance on the target device before integrating inference into an application.", "Amlogic 提供覆盖模型转换、评估与 NPU 部署的软件栈。开发者可以先在目标设备上验证模型精度和性能，再将推理能力集成到应用中。"], ["The stack has three main layers: applications, inference SDKs, and the runtime and driver. Applications handle input data and use the results. Python APIs and C/C++ SDKs load models and execute inference, while the ADLA runtime and NPU driver manage execution on the hardware.", "软件栈主要包含应用、推理 SDK、运行时与驱动三个层次。应用负责输入数据与结果使用；Python API 和 C/C++ SDK 负责模型加载与推理调用；ADLA 运行时和 NPU 驱动负责硬件执行。"], ["Before native deployment, the conversion toolchain compiles a supported model into an ADLA file for the selected chip. Precompiled models are also available through ADLA Hub.", "原生部署前，转换工具链将受支持的模型编译为面向指定芯片的 ADLA 文件，也可通过 ADLA Hub 获取预编译模型。"]], "software-stack"], ["02 · Toolchain and Runtime Components", "02 · 工具链与运行时组件", [["The development tools cover two stages: preparing a model and running it on the device. Choose the package for your development environment and integration method.", "开发工具分为模型准备与板端推理两个阶段，应根据开发环境和集成方式选择对应组件。"], ["<strong>PC conversion — amlnn_toolkit.</strong> Convert, quantize and compile supported models on an x86_64 Ubuntu PC, then export an ADLA file for the target chip. You can also evaluate the model on an ADB-connected board. Supported inputs include PyTorch, ONNX and TFLite models; LLM/VLM conversion uses the supported GGUF workflow.", "<strong>PC 转换 — amlnn_toolkit。</strong> 在 x86_64 Ubuntu PC 上完成受支持模型的转换、量化与编译，导出面向目标芯片的 ADLA 文件，也可通过 ADB 连接板卡进行评估。输入包括受支持的 PyTorch、ONNX、TFLite 模型；LLM/VLM 使用对应的 GGUF 转换流程。"], ["<strong>Board conversion — amlnn_edge_toolkit.</strong> Prepare and run supported models directly on a compatible Linux board. This route requires sufficient board memory and storage for conversion.", "<strong>板端转换 — amlnn_edge_toolkit。</strong> 在兼容的 Linux 板端直接完成受支持模型的转换与推理，并为转换过程预留足够的内存和存储空间。"], ["<strong>Python inference — Lite packages.</strong> Use amlnn_edge_toolkit_lite for common neural-network models and amlllm_edge_toolkit_lite for LLM/VLM models. These packages run compiled ADLA models without the full conversion environment.", "<strong>Python 推理 — Lite 包。</strong> 通用神经网络模型使用 amlnn_edge_toolkit_lite，LLM/VLM 使用 amlllm_edge_toolkit_lite。两者加载已编译 ADLA 模型，无需安装完整转换环境。"], ["<strong>Native C/C++ inference — NNSDK and LLMSDK.</strong> nn_runtime provides libnnsdk.so and nnsdk2.h for common models. llm_runtime provides libllmsdk.so and llmsdk.h for LLM/VLM integration. Select libraries that match the chip, operating system and application ABI.", "<strong>原生 C/C++ 推理 — NNSDK 与 LLMSDK。</strong> nn_runtime 通过 libnnsdk.so 与 nnsdk2.h 提供通用模型接口；llm_runtime 通过 libllmsdk.so 与 llmsdk.h 提供 LLM/VLM 接口。库文件需要与芯片、操作系统和应用 ABI 匹配。"], ["Before conversion, check the model examples and operator support for your target platform. Supported model formats do not imply support for every model or operator.", "转换前应核对目标平台的模型示例与算子支持情况。支持某种模型格式，并不意味着支持该格式下的所有模型与算子。"]], null], ["03 · Model Integration Pipeline", "03 · 模型集成流程", [["A complete application pipeline includes preprocessing, inference and postprocessing. When moving a reference model to the device, keep these stages consistent with the original implementation. The ADLA model handles neural-network computation; the application and SDK handle the surrounding data flow.", "完整应用链路包括预处理、推理与后处理。将参考模型部署到设备时，需要保持这些环节与原始实现一致。ADLA 模型负责神经网络计算，应用与 SDK 共同完成前后的数据处理。"], ["<strong>Vision preprocessing.</strong> Resize the image and match the input layout, channel order and normalization used by the model. Some models normalize pixels in [0, 255], while others first scale them to [0, 1]. Use the same convention during conversion and inference.", "<strong>视觉预处理。</strong> 调整图片尺寸，并对齐输入布局、通道顺序和归一化方式。部分模型直接处理 [0, 255] 像素，部分模型先缩放至 [0, 1]；转换与推理阶段必须使用一致的约定。"], ["For normalized input, x_norm = (x − mean) / std. If the model requires quantized input, apply its tensor parameters: x_quant = x_norm / scale + zero_point, with the required rounding and value range.", "归一化输入按 x_norm = (x − mean) / std 计算。模型要求定点输入时，再依据 Tensor 参数执行 x_quant = x_norm / scale + zero_point，并按数据类型要求处理舍入与数值范围。"], ["<strong>Text and audio preprocessing.</strong> Language models tokenize text into token IDs. Audio models may require waveform processing or time-frequency features. Follow the model example and SDK interface to determine which operations the application must provide.", "<strong>文本与音频预处理。</strong> 语言模型将文本分词为 Token ID，音频模型可能需要波形处理或时频特征提取。应结合模型示例与 SDK 接口，确认哪些操作需要由应用提供。"], ["<strong>Output decoding.</strong> Classification selects Top-1 or Top-5 categories. Detection decodes boxes and confidence scores, then applies filtering and non-maximum suppression (NMS). Language and audio outputs are decoded into text, labels or waveforms according to the task.", "<strong>输出解码。</strong> 分类任务提取 Top-1 或 Top-5 类别；检测任务解码边界框与置信度，再完成过滤和非极大值抑制（NMS）；语言与音频任务根据模型类型将结果解码为文本、标签或波形。"]], "integration-process"], ["04 · Integration Options", "04 · 集成方式", [["<strong>Native integration.</strong> Load a compiled ADLA model through Amlogic Python APIs or C/C++ SDKs. This gives the application direct control over model loading, input and output handling, and inference calls. C/C++ packages cover supported Android and Linux environments; Python packages target compatible Linux boards.", "<strong>原生集成。</strong> 通过 Amlogic Python API 或 C/C++ SDK 加载已编译 ADLA 模型，由应用直接管理模型加载、输入输出与推理调用。C/C++ 包面向受支持的 Android 和 Linux 环境，Python 包面向兼容的 Linux 板卡。"], ["<strong>Framework integration.</strong> Use an adapted framework such as LiteRT, Android NNAPI or ONNX Runtime. The framework manages model loading and the supported acceleration path. Model formats, operator coverage and compilation behavior depend on the framework, chip and software release.", "<strong>框架集成。</strong> 使用已适配的 LiteRT、Android NNAPI 或 ONNX Runtime，由框架管理模型加载与受支持的加速路径。输入格式、算子覆盖与编译方式取决于框架、芯片及软件版本。"]], null], ["05 · Deployment Steps", "05 · 部署步骤", [["<strong>Confirm the environment.</strong> Identify the chip, operating system and ABI. Check driver, DDK and SDK compatibility, then run a supported example to verify the board before introducing a new model.", "<strong>确认环境。</strong> 识别芯片、操作系统与 ABI，核对驱动、DDK 和 SDK 的兼容性，先运行已支持的示例验证板端，再导入新模型。"], ["<strong>Prepare and evaluate the model.</strong> For native integration, compile or download an ADLA model for the target chip. For framework integration, prepare the required model format. Use representative calibration data where required, and verify accuracy and performance on the device.", "<strong>准备并评估模型。</strong> 原生集成需编译或下载目标芯片对应的 ADLA 模型；框架集成需准备相应模型格式。需要校准时使用有代表性的数据，并在设备上验证精度与性能。"], ["<strong>Complete application integration.</strong> Connect data capture, preprocessing, inference and result handling. Validate the complete pipeline with representative inputs, including its latency and memory use. Continue to Quick Start for commands and Troubleshooting for common checks.", "<strong>完成应用集成。</strong> 串联数据采集、预处理、推理和结果处理，使用代表性输入验证完整链路及其延迟、内存占用。具体命令参见 Quick Start，常见问题参见 Troubleshooting。"]], "integration-steps"]];return `<div class="intro-reading">${sections.map(([en,zh,paragraphs,figure])=>`<section class="intro-article"><h3>${T(en,zh)}</h3>${paragraphs.map(([text,cn])=>`<p>${T(text,cn)}</p>`).join('')}</section>${figure?guideFigure(figure,figure==='software-stack'?'Amlogic NPU Software Stack':figure==='integration-process'?'Model Integration Pipeline':'Deployment Steps',figure==='software-stack'?'Amlogic NPU 软件栈':figure==='integration-process'?'模型集成流程':'部署步骤'):''}`).join('')}</div>`}

function qsCurrentLLM(){const playground='https://github.com/Amlogic-NN/amlnn-model-playground/tree/main/examples/LLMs',base='https://github.com/Amlogic-NN/amlnn-toolkit/tree/main/amlnn_runtime/llm_runtime/example/base_api';return qsSection('llm','LLM','LLM examples: Python chat and native C/C++','LLM 示例：Python 对话与原生 C/C++','GitHub / SDK training',`<p>${T('Choose Python for a first interactive chat on an Arm64 Linux board, or the native base_api example for C/C++ application integration. Both routes require an ADLA model compiled for your target chip and compatible NPU software. These instructions follow the linked repository examples; they replace the older PDF-only native case.','在 Arm64 Linux 板端体验交互对话可选择 Python；集成 C/C++ 应用可选择原生 base_api 示例。两条路线都需要针对目标芯片编译的 ADLA 模型和兼容的 NPU 软件。以下依据链接仓库中的示例编写，替代旧版 PDF 专用 Native Case。')}</p><div class="source-links">${qsLink(playground,'Model Playground · LLM Examples','Model Playground · LLM 示例')}${qsLink(base,'LLMSDK · base_api','LLMSDK · base_api')}${openButton('models','Download ADLA models','下载 ADLA 模型')}</div><h4>${T('1. Check resources and prepare your model','1. 检查资源并准备模型')}</h4><div class="table-scroll"><table><thead><tr><th>Model</th><th>CPU</th><th>DDR</th><th>${T('NN reserved DDR','NN 预留内存')}</th><th>NPU</th></tr></thead><tbody><tr><td>Qwen 0.5B</td><td>4 cores</td><td>4 GB</td><td>2 GB</td><td>≥ 3.2 TOPS</td></tr><tr><td>Qwen 1.8B</td><td>4 cores</td><td>8 GB</td><td>6–6.5 GB</td><td>≥ 3.2 TOPS</td></tr><tr><td>Gemma 2B</td><td>4 cores</td><td>8 GB</td><td>5.5–6 GB</td><td>≥ 3.2 TOPS</td></tr></tbody></table></div><p>${T('These are the configurations listed by the LLM Examples README; no GPU is required. Memory varies with model, quantization and context length. Compile a supported model with Amlogic Toolkit, or download a precompiled ADLA model and matching tokenizer assets from Hugging Face ADLA Hub. A model compiled for A311D2 must be replaced by the appropriate package when using another chip.','以上为 LLM Examples README 中给出的配置，无需 GPU。内存随模型、量化和上下文长度变化。可使用 Amlogic Toolkit 编译受支持的模型，也可通过 Hugging Face ADLA Hub 下载预编译模型与匹配的 Tokenizer 资源。使用其他芯片时，必须换成对应平台的模型包，不能直接复用 A311D2 模型。')}</p>${qsCode("mkdir -p ~/workspace\ncd ~/workspace\ngit clone https://github.com/Amlogic-NN/amlnn-model-playground.git\ngit clone https://github.com/Amlogic-NN/amlnn-toolkit.git")}
<h4>${T('2A. Python chat on Arm64 Linux','2A. Arm64 Linux 上运行 Python 对话')}</h4><p>${T('Run the following on the board. The repository specifies Ubuntu 22.04 / Debian, aarch64, Python 3.10 and compatible LIBADLA 1.7.x or later. Use a board image with the required NPU driver and runtime already installed. Keep the two repositories adjacent.','以下命令在板端执行。仓库要求 Ubuntu 22.04 / Debian、aarch64、Python 3.10，以及兼容的 LIBADLA 1.7.x 或更新版本。设备镜像需已安装所需 NPU 驱动与运行库，两个仓库保持同级目录。')}</p>${qsCode("dmesg | grep -i adla\nstrings /usr/lib/libadla.so | grep LIBADLA\n# If conda is installed:\nconda create -n amlllm_310 python=3.10 -y\nconda activate amlllm_310\ncd ~/workspace/amlnn-model-playground\nfind ../amlnn-toolkit -type f -name \"amlllm*cp310*linux_aarch64.whl\"") }<p>${T('Install the wheel returned above that matches your SDK release. Replace /absolute/path placeholders with real paths. If conda is unavailable, use the Miniforge installation steps in the source README.','安装上一步找到的、与 SDK 版本匹配的 wheel。将 /absolute/path 占位路径替换成实际文件路径。尚未安装 conda 时，可先参考源 README 的 Miniforge 安装步骤。')}</p>${qsCode("python -m pip install /absolute/path/to/amlllm-wheel.whl\ncd ~/workspace/amlnn-model-playground/examples/LLMs/py\npython simple_chat.py --help\npython simple_chat.py \\\n  --model /absolute/path/to/model.adla \\\n  --tokenizer /absolute/path/to/tokenizer.json \\\n  --model-type qwen") }<p>${T('Use the chat template for your model. For Top-P sampling, append --sampling-mode top_p --top-p 0.9 --temperature 0.8. Enter new_talk to clear history, break to request interruption, or exit to quit.','选择与模型匹配的 chat template。需要 Top-P 采样时，追加 --sampling-mode top_p --top-p 0.9 --temperature 0.8。输入 new_talk 清空历史，break 请求中断，exit 退出。')}</p>
<h4>${T('2B. Native C/C++ base_api example','2B. 原生 C/C++ base_api 示例')}</h4><p>${T('The following is an Android arm64 build on the host. Edit ANDROID_NDK_PATH inside build-android64.sh to point to your NDK installation; the current script uses r25c. The script produces install/android64/base_api_llm and base_api_vlm. The directory also contains Android 32-bit, Yocto and Buildroot build scripts; choose the toolchain and ABI for your board.','以下为主机交叉编译 Android arm64 的示例。先修改 build-android64.sh 中的 ANDROID_NDK_PATH，指向实际 NDK 安装目录；当前脚本采用 r25c。构建产物为 install/android64/base_api_llm 与 base_api_vlm。目录也提供 Android 32 位、Yocto 和 Buildroot 脚本，需选择与板端匹配的工具链和 ABI。')}</p>${qsCode("cd ~/workspace/amlnn-toolkit/amlnn_runtime/llm_runtime/example/base_api\n# Edit ANDROID_NDK_PATH in this script before building\nbash build-android64.sh\nadb shell \"mkdir -p /data/local/tmp/llm_quickstart\"\nadb push install/android64/base_api_llm /data/local/tmp/llm_quickstart/\nadb push /absolute/path/to/model.adla /data/local/tmp/llm_quickstart/model.adla\n# Deploy the matching runtime library if not provided by the image\nadb push ../../llmsdk/android/lib64/libllmsdk.so /data/local/tmp/llm_quickstart/\nadb shell\ncd /data/local/tmp/llm_quickstart\nchmod +x base_api_llm\nexport LD_LIBRARY_PATH=/data/local/tmp/llm_quickstart:/vendor/lib64\n./base_api_llm --help\n./base_api_llm --model_path ./model.adla --retain_history 1") }<p>${T('The base_api CLI takes --model_path, --sampling_mode and --retain_history. It does not take the older demo’s tokenizer positional argument or --model_type flag. Keep any companion assets required by your model package. Enter a prompt at LLM@Amlogic>>>; new_talk resets the session, break interrupts generation, and exit releases the context and exits.','base_api CLI 使用 --model_path、--sampling_mode 和 --retain_history，不使用旧 Demo 的 Tokenizer 位置参数或 --model_type。模型包要求的配套资源仍需保留。在 LLM@Amlogic>>> 后输入问题；new_talk 重置会话，break 中断生成，exit 释放上下文并退出。')}</p>
<h4>${T('3. Understand the LLMSDK lifecycle','3. 理解 LLMSDK 调用流程')}</h4><p>${T('The SDK training deck describes initialization, input construction, generation and cleanup. In base_api_llm.cpp, aml_llm_init loads the model and registers a callback. AML_LLMInput carries the user prompt; AML_LLMRunConfig controls generation, history and thinking. The aml_llm_run call starts generation. Callback status NORMAL delivers incremental text, FINISH marks completion and ERROR reports failure. The aml_llm_reset call clears history, aml_llm_break stops generation and aml_llm_uninit releases resources.','SDK 培训材料介绍了初始化、输入构造、生成与释放流程。在 base_api_llm.cpp 中，aml_llm_init 加载模型并注册回调；AML_LLMInput 提供用户输入，AML_LLMRunConfig 控制生成、历史与思考开关；aml_llm_run 执行生成。回调状态 NORMAL 提供增量文本，FINISH 表示完成，ERROR 表示异常。aml_llm_reset 清空历史，aml_llm_break 中断生成，aml_llm_uninit 释放资源。')}</p>
${llmUserExample("llm")}<h4>${T('4. Validate a first conversation','4. 验证第一次对话')}</h4>${qsCode("Explain what an NPU does in two sentences.")}<ul class="qs-checks"><li>${T('Check model initialization, streamed output and successful completion. Try another prompt, reset history, then exit and check that resources are released.','检查模型初始化、流式输出和正常结束；再运行一轮对话、重置历史，然后退出并检查资源释放。')}</li><li>${T('Use relevance, repetition and abnormal termination as smoke-test checks. A reasonable answer alone is not a quantitative accuracy benchmark; use PPL / MMLU or task-specific evaluation separately.','把相关性、明显重复和异常中断作为基础功能检查；回答合理不能替代定量精度评测，PPL / MMLU 或具体任务评测应另行进行。')}</li><li>${T('Record first-token latency, decode tokens/s, end-to-end latency, memory and errors. Keep chip, model precision, context length, prompt and software versions with every measurement.','记录首 Token 延迟、Decode tokens/s、端到端时延、内存与错误日志，并同时记录芯片、模型精度、上下文长度、Prompt 和软件版本。')}</li></ul><p>${T('For VLM, the same base_api directory contains base_api_vlm.cpp. Use its --help and a matching language model plus mmproj package; image preparation and multimodal inputs require additional setup.','VLM 可参考同目录 base_api_vlm.cpp，通过 --help 确认参数，并准备匹配的语言模型与 mmproj 模型；图片预处理与多模态输入需要额外配置。')}</p><div class="source-links">${qsLink(playground,'Python / C++ reference','Python / C++ 示例参考')}${qsLink(base,'Native API source and build scripts','原生 API 源码与构建脚本')}${openButton('troubleshoot','Troubleshooting','常见问题排查')}</div>`)}


SECTIONS.push({id:'quick-intro',name:'Introduction',icon:'book',desc:'How the Amlogic NPU software stack fits together.'});
SECTIONS.push({id:'quick-cnn',name:'CNN Quick Start',icon:'code',desc:'Convert, deploy and verify your first vision model.'},{id:'quick-llm',name:'LLM Quick Start',icon:'code',desc:'Run your first language model with Python or C/C++.'});
Object.assign(ZH,{'Introduction':'平台介绍','CNN Quick Start':'CNN 快速入门','LLM Quick Start':'LLM 快速入门','Convert, deploy and verify your first vision model.':'完成第一个视觉模型的转换、部署与验证。','Run your first language model with Python or C/C++.':'通过 Python 或 C/C++ 运行第一个语言模型。'});
function renderQuickIntro(){
 const host=document.getElementById('learning');
 host.innerHTML=`<div class="source-links">${openButton('quick','← Quick Start','← 新手快速入门')}</div>
  ${overviewIntroduction()}`;
 bindPortalLinks(host);
}
function renderQuickLanding(){const host=document.getElementById('learning');host.innerHTML=`<div class="learn-intro"><h2>${T('Choose your Quick Start','选择快速入门教程')}</h2><p>${T('Start with the architecture overview, then follow a dedicated walkthrough for vision or language models.','先了解整体架构，再按模型类型完成视觉或语言模型的首次运行。')}</p></div><div class="grid">${agentPageCard('quick-cnn','CNN Quick Start',T('Environment checks, model conversion, YOLOX inference and result validation.','环境确认、模型转换、YOLOX 推理与结果验证。'),T('Start CNN tutorial','开始 CNN 教程'))}${agentPageCard('quick-llm','LLM Quick Start',T('Model download, Python chat, native C/C++ integration and generation checks.','模型下载、Python 对话、原生 C/C++ 集成与生成结果检查。'),T('Start LLM tutorial','开始 LLM 教程'))}${agentPageCard('quick-intro','Introduction',T('How the software stack fits together before you run the tutorials.','开始教程前，先了解软件栈的整体结构。'),T('Read introduction','阅读平台介绍'))}</div>`;bindPortalLinks(host)}


function llmDeploymentFlow(){return `<section class="qs-chapter llm-deploy-flow" aria-labelledby="llm-flow-title"><div class="qs-chapter-head"><span>FLOW</span><h3 id="llm-flow-title">${T('LLM deployment workflow','LLM 部署流程')}</h3></div><p>${T('Get an ADLA model through either route, then deploy it with the runtime for your board.','通过以下任一路径获取 ADLA 模型，再搭配板端运行库完成部署。')}</p><div class="llm-flow-branches"><div class="llm-flow-lane"><small>${T('OPTION A · COMPILE','路径 A · 自行编译')}</small><div class="llm-flow-node"><strong>${T('Source LLM','原始 LLM 模型')}</strong><span>${T('Supported floating-point GGUF model','受支持的浮点 GGUF 模型')}</span></div><div class="llm-flow-arrow" aria-hidden="true">↓</div><div class="llm-flow-node"><strong>Amlogic Toolkit</strong><span>${T('Configure quantization and target chip, then compile and export ADLA','配置量化与目标芯片，编译并导出 ADLA')}</span></div><a class="link" href="https://github.com/Amlogic-NN/amlnn-toolkit" target="_blank" rel="noopener noreferrer">${T('Toolkit and conversion guides','Toolkit 与转换指南')} ↗</a></div><div class="llm-flow-lane"><small>${T('OPTION B · DOWNLOAD','路径 B · 下载预编译模型')}</small><div class="llm-flow-node"><strong>Hugging Face · ADLA Hub</strong><span>${T('Browse precompiled LLM model packages','浏览已编译的 LLM 模型包')}</span></div><div class="llm-flow-arrow" aria-hidden="true">↓</div><div class="llm-flow-node"><strong>${T('Select a matching package','选择匹配的模型包')}</strong><span>${T('Check target chip, precision, SDK compatibility and companion assets','核对目标芯片、精度、SDK 兼容性与配套资源')}</span></div><a class="link" href="https://huggingface.co/Amlogic-NN/amlnn-adla-models" target="_blank" rel="noopener noreferrer">${T('Download precompiled ADLA','下载预编译 ADLA')} ↗</a></div></div><div class="llm-flow-merge" aria-hidden="true"><span>↓</span><span>↓</span></div><div class="llm-flow-shared"><div class="llm-flow-node"><strong>${T('Target-specific ADLA model','匹配目标平台的 ADLA 模型')}</strong><span>${T('New SDK: no separate tokenizer file required','新版 SDK：无需单独的 Tokenizer 文件')}</span></div><div class="llm-flow-arrow" aria-hidden="true">↓</div><div class="llm-flow-node"><strong>${T('Prepare the board and runtime','准备板端环境与运行库')}</strong><span>${T('Compatible NPU driver / libadla + Python package or native LLMSDK','兼容的 NPU 驱动 / libadla + Python 包或原生 LLMSDK')}</span></div><div class="llm-flow-arrow" aria-hidden="true">↓</div><div class="llm-flow-run"><div class="llm-flow-node"><strong>Python · base_api_llmlite.py</strong><span>${T('Arm64 Linux interactive chat','Arm64 Linux 交互对话')}</span></div><div class="llm-flow-node"><strong>C/C++ · base_api_llm</strong><span>${T('Build for the target OS and ABI','按目标 OS 与 ABI 编译部署')}</span></div></div><div class="llm-flow-arrow" aria-hidden="true">↓</div><div class="llm-flow-node llm-flow-result"><strong>${T('Run and verify','运行并验证')}</strong><span>${T('Prompt → streamed output → completion; measure first-token latency, decode speed and memory','输入 Prompt → 流式输出 → 正常结束；评估首 Token 延迟、Decode 速度与内存')}</span></div></div><p>${T('Compiling with Toolkit lets you prepare your own supported model and quantization configuration. Downloading a precompiled package skips conversion. Both routes must match the target hardware and runtime; the steps below start after an ADLA model is available.','通过 Toolkit 可为受支持的自有模型选择量化配置并生成 ADLA；下载预编译模型可跳过转换步骤。两条路径均需与目标硬件和运行库匹配；下方操作从已经获得 ADLA 模型开始。')}</p></section>`}


function llmDetailedPreparation(){return `<section class="qs-chapter"><div class="qs-chapter-head"><span>START</span><h3>${T('Before running the first model','开始运行之前')}</h3></div><p>${T('This walkthrough has two machines: the host PC downloads files and builds Android programs; the Amlogic board executes inference. Python commands run directly on a compatible Arm64 Linux board. Do not run the aarch64 wheel on an x86 PC.','本教程涉及两台机器：主机 PC 下载文件并编译 Android 程序，Amlogic 板卡实际执行推理。Python 命令直接在兼容的 Arm64 Linux 板端运行，不能在 x86 PC 上安装 aarch64 wheel。')}</p><h4>${T('Step 1 · Identify the target device','步骤 1 · 确认目标设备')}</h4>${qsCode("adb devices\nadb shell uname -m\nadb shell \"getprop ro.product.cpu.abi\"\n# On Linux boards, run locally:\nuname -m\ncat /etc/os-release\nls -l /dev/adla*")}<p>${T('Expected: adb devices lists an authorized device, the architecture matches the selected program, and the NPU device node exists. The getprop command is Android-only and is not needed on Linux. An unauthorized device needs authorization on the device before file transfer.','预期：adb devices 列出已授权设备，架构与所选程序一致，且存在 NPU 设备节点。getprop 仅用于 Android，Linux 无需执行。显示 unauthorized 时需先在设备上授权，再传输文件。')}</p><h4>${T('Step 2 · Select the model package','步骤 2 · 选择模型包')}</h4><p>${T('Use Toolkit to compile a supported source model for your chip, or open Hugging Face ADLA Hub and choose a precompiled package. Check the chip identifier, model precision, memory requirement, supported context configuration and SDK compatibility in the model package. Download every tokenizer / configuration asset required by that model and example. Renaming an ADLA file does not change its target platform.','使用 Toolkit 为目标芯片编译受支持的源模型，或进入 Hugging Face ADLA Hub 选择预编译模型包。核对包内说明中的芯片、精度、内存要求、上下文配置和 SDK 兼容性，下载模型与示例要求的全部 Tokenizer / 配置资源。重命名 ADLA 文件不会改变其目标平台。')}</p><div class="source-links">${qsLink('https://huggingface.co/Amlogic-NN/amlnn-adla-models','Hugging Face ADLA Hub','Hugging Face ADLA Hub')}${qsLink('https://github.com/Amlogic-NN/amlnn-toolkit','Toolkit conversion resources','Toolkit 转换资源')}</div><h4>${T('Step 3 · Organize the files','步骤 3 · 整理文件')}</h4><p>${T('Keep both repositories in ~/workspace. Store model assets separately, for example ~/models/llm/. In the commands below, replace every /absolute/path placeholder with your actual path. For VLM, obtain a language model and a matching mmproj image encoder package for the same target.','两个仓库保持在 ~/workspace 下，模型资源可单独存放在 ~/models/llm/。下方所有 /absolute/path 均需替换为真实路径。VLM 需要额外准备同一目标平台上匹配的语言模型与 mmproj 图像编码模型。')}</p>${qsCode("# Check downloaded files on the machine holding them\nls -lh /absolute/path/to/model.adla\nls -lh /absolute/path/to/tokenizer.json\n# Compare this digest with the publisher checksum when provided\nsha256sum /absolute/path/to/model.adla")}<p>${T('A non-empty file is only a basic transfer check. If the publisher supplies a checksum, compare it. The Python route requires the tokenizer argument shown below; native base_api has a different CLI, so follow its own command section.','文件非空只能作为基础传输检查；发布方提供校验值时，应进一步核对。Python 路线需要下方命令中的 Tokenizer 参数，原生 base_api 的 CLI 不同，请按对应小节执行。')}</p><h4>${T('Step 4 · Choose one execution route','步骤 4 · 选择运行路线')}</h4><p>${T('For Arm64 Ubuntu / Debian, start with Python chat below. For Android, build and deploy the native C/C++ example from the host PC. Follow one route completely before trying the other. A successful first run means the model loads, receives a prompt, streams readable text, finishes normally and exits without an error.','Arm64 Ubuntu / Debian 用户可从下方 Python 对话开始；Android 用户在主机交叉编译并部署原生 C/C++ 示例。建议先完整跑通一条路线，再尝试另一条。首次成功的判断包括模型加载、接收输入、流式输出可读文字、正常结束和无错误退出。')}</p></section>`}
function llmVLMWalkthrough(){return `<section class="qs-chapter"><div class="qs-chapter-head"><span>VLM</span><h3>${T('Optional · Run image understanding','可选 · 运行图像理解')}</h3></div><p>${T('The Android build above also generates base_api_vlm. Prepare a compatible VLM language model, its matching mmproj model and test images. Multi-image operation depends on the compiled model and runtime support; the screenshot demonstrates a supplied working case.','上方 Android 构建同时生成 base_api_vlm。准备兼容的 VLM 语言模型、匹配的 mmproj 模型和测试图片。多图运行取决于编译模型与运行库支持情况；截图展示的是用户提供的已运行案例。')}</p>${qsCode("# Host PC, from the base_api source directory\nadb push install/android64/base_api_vlm /data/local/tmp/llm_quickstart/\nadb push /absolute/path/to/vlm.adla /data/local/tmp/llm_quickstart/vlm.adla\nadb push /absolute/path/to/mmproj.adla /data/local/tmp/llm_quickstart/mmproj.adla\nadb push /absolute/path/to/001.jpg /data/local/tmp/llm_quickstart/001.jpg\nadb push /absolute/path/to/002.jpg /data/local/tmp/llm_quickstart/002.jpg\nadb shell\ncd /data/local/tmp/llm_quickstart\nexport LD_LIBRARY_PATH=/data/local/tmp/llm_quickstart:/vendor/lib64\nchmod +x base_api_vlm\n./base_api_vlm --model_path ./vlm.adla --mmproj_path ./mmproj.adla")}<p>${T('At the VLM>>> prompt, enter each line separately. Start with one image; append the second only when the model supports multiple images.','在 VLM>>> 提示符后逐行输入。先验证单图，模型支持多图后再追加第二张。')}</p>${qsCode("/image 001.jpg\n/image 002.jpg\nDescribe these two images.")}<p>${T('Expected: image loaded reports dimensions, image appended reports the count, then robot: introduces the response. The example adds &lt;image&gt; markers automatically when the prompt has none. Verify that descriptions correspond to the actual images. The new_talk command clears the session and pending images.','预期：image loaded 显示图片尺寸，image appended 显示已追加数量，随后 robot: 开始输出回答。Prompt 中没有 &lt;image&gt; 时，示例会自动添加标记。请对照真实图片检查描述，new_talk 可重置会话并清空待处理图片。')}</p>${llmUserExamples()}</section>`}
function llmTroubleDetails(){return `<section class="qs-chapter"><h3>${T('If a step fails','遇到问题时怎么排查')}</h3><div class="table-scroll"><table><thead><tr><th>${T('Symptom','现象')}</th><th>${T('Check','检查方法')}</th></tr></thead><tbody>${[[T('Wheel installation fails','wheel 安装失败'),T('Run python --version and uname -m; use the cp310 / aarch64 wheel in the active environment.','执行 python --version 与 uname -m；在已激活的环境中使用 cp310 / aarch64 wheel。')],[T('Executable format error','可执行文件格式错误'),T('Match Android versus Linux and the 32 / 64-bit ABI; rebuild with the correct script.','核对 Android / Linux 与 32 / 64 位 ABI，使用对应脚本重新编译。')],[T('Shared library not found','找不到动态库'),T('Check libllmsdk.so, its dependencies and LD_LIBRARY_PATH against the board image.','核对 libllmsdk.so、依赖库与 LD_LIBRARY_PATH 是否匹配板端镜像。')],[T('Model initialization fails','模型初始化失败'),T('Check the model target chip, runtime / driver compatibility, complete files, memory and earliest error log.','检查模型目标芯片、运行库 / 驱动兼容性、文件完整性、内存和最早报错。')],[T('Text repeats or appears garbled','重复输出或乱码'),T('Check model / SDK compatibility and the chat template configuration. Reset the conversation and retry a short prompt.','检查模型 / SDK 兼容性与聊天模板配置，重置会话后用短 Prompt 重试。')],[T('VLM image cannot load','VLM 图片加载失败'),T('Use a path on the board, confirm file permissions and supported image decoding. Check image loaded before submitting a prompt.','使用板端实际路径，检查权限与图片解码，先确认 image loaded 再输入问题。')]].map(r=>'<tr>'+r.map(t=>'<td>'+t+'</td>').join('')+'</tr>').join('')}</tbody></table></div><p>${T('When reporting a problem, include the chip, OS / ABI, driver and SDK versions, model package, exact command and full error log.','反馈问题时附上芯片、OS / ABI、驱动与 SDK 版本、模型包、实际命令和完整日志。')}</p></section>`}


const USER_LLM_RESULTS={"llm-zh": {"src": "assets/user-llm-results-llm-zh.webp", "w": 858, "h": 800}, "vlm-zh": {"src": "assets/vlm-zh.webp", "w": 1667, "h": 279}, "llm-en": {"src": "assets/llm-en.webp", "w": 1299, "h": 1211}, "vlm-en": {"src": "assets/vlm-en.webp", "w": 2171, "h": 724}};
function llmUserExample(kind){const asset=USER_LLM_RESULTS[kind+'-'+(portalLang==='zh'?'zh':'en')];const caption=kind==='llm'?T('LLM example · chickens and rabbits reasoning','LLM 示例 · 鸡兔同笼推理'):T('VLM example · describing two images','VLM 示例 · 两张图片描述');return `<figure class="guide-figure user-result-figure"><img src="${asset.src}" width="${asset.w}" height="${asset.h}" loading="lazy" decoding="async" alt="${caption}"><figcaption>${caption}</figcaption><p>${T('English translation of the user-provided captured output. This translation is not a separate English inference run.','用户提供的原始中文运行截图。切换英文时显示图内文字的翻译版，非另一次英文推理实测。')}</p></figure>`}function llmUserExamples(){return llmUserExample('vlm')}

function renderLLMQuick(){const host=document.getElementById("learning");host.innerHTML=`<div class="source-links">${openButton("quick","← Quick Start","← 新手快速入门")}</div><div class="learn-intro"><h2>LLM Quick Start</h2><p>${T("Run a first text conversation, then extend it to image understanding. This guide follows LLM User Guide v0.3 and the current Toolkit base_api examples. For a first run, download a precompiled ADLA model; model conversion is optional.","先跑通文本对话，再扩展图像理解。本教程依据 LLM User Guide v0.3 与当前 Toolkit base_api 示例整理。首次使用建议下载预编译 ADLA 模型；模型转换为可选步骤。")}</p><p>${T("The Python and C++ examples below use the newer SDK. They do not require a separate tokenizer.json or a --tokenizer argument. Use the model and runtime from compatible releases.","下方 Python 与 C++ 示例统一使用新版 SDK，不需要单独的 tokenizer.json 或 --tokenizer 参数。请配套使用兼容版本的模型与运行库。")}</p><div class="source-links">${qsLink("https://github.com/Amlogic-NN/amlnn-toolkit/tree/main/amlnn_toolkit_lite/amlllm_edge_toolkit_lite/example/base_api","Python example source","Python 示例源码")}${qsLink("https://github.com/Amlogic-NN/amlnn-toolkit/tree/main/amlnn_runtime/llm_runtime/example/base_api","C++ example source","C++ 示例源码")}${qsLink("https://github.com/Amlogic-NN/amlnn-toolkit/tree/main/doc/09_Amlogic_NPU_LLM_User_Guide_CN_V0.3.pdf","LLM User Guide v0.3","LLM 用户指南 v0.3")}</div></div><nav class="qs-toc"><a href="#qs-llm-device">${T("01 Device","01 设备")}</a><a href="#qs-llm-model">${T("02 ADLA model","02 模型")}</a><a href="#qs-llm-python">${T("03 Python","03 Python")}</a><a href="#qs-llm-native">${T("04 C++","04 C++")}</a><a href="#qs-llm-chat">${T("05 Verify","05 验证")}</a></nav>${llmDeploymentFlow()}${qsSection("llm-device","01","Confirm the device and software","确认设备与软件环境","LLM User Guide v0.3",`<p>${T("The supplied v0.3 guide covers A311Y3 and C305X2 / A123X. First identify your board and system. Choose a small supported model, such as Qwen2.5-0.5B-Instruct, with an ADLA package for that exact chip.","本次提供的 v0.3 指南适用 A311Y3 与 C305X2 / A123X。首先确认板卡与系统；建议选择 Qwen2.5-0.5B-Instruct 等受支持的小模型，并使用对应芯片的 ADLA 包。")}</p><h4>${T("Run on the board · environment checks","在板端执行 · 环境检查")}</h4>${qsCode("uname -m\n# Linux only\ncat /etc/os-release\n# Android only\ngetprop ro.product.cpu.abi\n# Check NPU device and driver\nls -l /dev/adla*\ndmesg | grep -i adla\n# Linux: adjust path if your image installs the library elsewhere\nstrings /usr/lib/libllmsdk.so | grep LLMSDK\n# Android arm64 alternative\nstrings /vendor/lib64/libllmsdk.so | grep LLMSDK")}<p>${T("Run only the commands for your OS. The driver log must report an available NPU. User Guide v0.3 requires driver ≥ 2.0.0; the current Python Toolkit README requires ≥ 2.0.2, so use ≥ 2.0.2 for the Python route. Driver, LLMSDK, Toolkit and model compatibility must also match the board release.","只执行对应系统的命令。驱动日志应能确认 NPU 可用。v0.3 指南要求驱动 ≥ 2.0.0，当前 Python Toolkit README 要求 ≥ 2.0.2，因此 Python 路线按 ≥ 2.0.2 准备；驱动、LLMSDK、Toolkit 和模型还需与板端发布版本兼容。")}</p>${qsCode("# Linux board: inspect available memory and storage\nfree -h\ndf -h")}<p>${T("Check both model memory and KV-cache requirements for the selected context length. The guide reports about 476 MB model memory for Qwen2.5-0.5B at context 2048; this is not total system memory. Leave room for the OS, runtime and application.","结合模型和上下文长度检查内存需求。指南中 Qwen2.5-0.5B、上下文 2048 的模型内存约为 476 MB，这并非整机总内存要求，还需为 OS、运行库和应用留足空间。")}</p>`)}${qsSection("llm-model","02","Get an ADLA model","获取 ADLA 模型","LLM User Guide v0.3",`<h4>${T("Route A · Download a precompiled model (recommended first)","路径 A · 下载预编译模型（首次推荐）")}</h4><p>${T("Open Amlogic ADLA Hub, locate the package for your chip and model, and download the .adla file. Read the package notes for precision, context and SDK compatibility. Transfer that file to the board. In this tutorial its local name is model.adla.","打开 Amlogic ADLA Hub，找到与你的芯片和模型匹配的模型包，下载 .adla 文件，并阅读精度、上下文和 SDK 兼容性说明。将文件放到板端，本教程统一使用本地文件名 model.adla。")}</p>${qsLink("https://huggingface.co/Amlogic-NN/amlnn-adla-models","Open Hugging Face ADLA Hub","打开 Hugging Face ADLA Hub")}<p>${T("Downloading a precompiled model lets you skip the PC conversion Toolkit entirely. Renaming a file to model.adla only simplifies the commands; it does not change its chip target.","下载预编译模型后，可以完全跳过 PC 转换 Toolkit 的安装。改名为 model.adla 仅用于简化命令，不会改变模型的目标芯片。")}</p><h4>${T("Route B · Compile your own ADLA model (optional)","路径 B · 自行编译 ADLA（可选）")}</h4><p>${T("Run conversion on an x86 PC with amlnn_toolkit. This release accepts supported f16 / bf16 / f32 GGUF models; do not feed an already integer-quantized GGUF into this conversion path. Original Hugging Face weights can first be exported to floating-point GGUF with llama.cpp, as described in Guide sections 3.2–3.3.","转换在 x86 PC 上通过 amlnn_toolkit 完成。此版本输入为受支持的 f16 / bf16 / f32 GGUF，不应把已整数量化的 GGUF 当作该转换路径的输入。原始 Hugging Face 权重可先通过 llama.cpp 导出浮点 GGUF，具体参照指南 3.2–3.3 节。")}</p><details class="qs-extra"><summary>${T("Show PC conversion steps","展开 PC 转换步骤")}</summary><p>${T("Create a separate PC Python 3.10 environment. Download the matching requirements_x86_64.txt and wheel from the x86 Toolkit package directory into one folder. The guide installs conversion dependencies individually to avoid version conflicts.","在 PC 上创建独立 Python 3.10 环境；从 x86 Toolkit 安装包目录下载匹配的 requirements_x86_64.txt 与 wheel，放在同一目录。指南要求逐项安装转换依赖，以避免版本冲突。")}</p>${qsLink("https://github.com/Amlogic-NN/amlnn-toolkit/tree/main/amlnn_toolkit/whl/linux_x86","PC conversion package directory","PC 转换安装包目录")}${qsCode("conda create -n amlnn_convert python=3.10 -y\nconda activate amlnn_convert\n# Run in the downloaded package directory\nwhile IFS= read -r req; do\n  case \"$req\" in \"\"|\\#*) continue ;; esac\n  python -m pip install \"$req\" || break\ndone < requirements_x86_64.txt\n# Replace with the actual matching wheel filename\npython -m pip install ./amlnn_toolkit-VERSION-cp310-cp310-linux_x86_64.whl\npython -c \"from amlnn.api import AMLNN_LLM; print('Toolkit import OK')\"")}<p>${T("Save the following as convert_llm.py beside Qwen2.5-0.5B-Instruct-F16.gguf, then run python convert_llm.py. The target string below is for A311Y3. For C305X2 / A123X use PRODUCT_PID0XA008.","将下方代码保存为 convert_llm.py，与 Qwen2.5-0.5B-Instruct-F16.gguf 放在同一目录，再运行 python convert_llm.py。下方 target 字符串适用于 A311Y3；C305X2 / A123X 改为 PRODUCT_PID0XA008。")}</p>${qsCode("from amlnn.api import AMLNN_LLM\n\ncompiler = AMLNN_LLM(log_level=\"INFO\")\ntry:\n    compiler.load_gguf(model=\"./Qwen2.5-0.5B-Instruct-F16.gguf\")\n    compiler.config(\n        prefill_batch_length=32,\n        max_context=2048,\n        transformer_model_type=\"LLM\",\n        target_platform=\"PRODUCT_PID0XA007\",\n        output_dir=\"output\",\n    )\n    compiler.compile()\nfinally:\n    compiler.uninit()")}<p>${T("After successful compilation, locate the .adla output under output/ and copy it to the board. The guide notes that Gemma-4 E2B / E4B are precompiled-only in this Toolkit release.","编译成功后，在 output/ 中找到 .adla 产物，再复制到板端。指南注明该 Toolkit 版本中 Gemma-4 E2B / E4B 仅支持官方预编译包。")}</p></details>`)}${qsSection("llm-python","03","Python · run on the Linux board","Python · 在 Linux 板端运行","LLM User Guide v0.3",`<p>${T("Choose this route for a compatible Arm64 Linux board. Every command in this section runs on the board. No Android NDK or C++ build is required. If you use Android, skip to section 04.","兼容的 Arm64 Linux 板卡可选择本路线。本节所有命令均在板端执行，不需要 Android NDK 或 C++ 编译。Android 用户请跳到第 04 节。")}</p><h4>${T("3.1 · Prepare Python and the SDK checkout","3.1 · 准备 Python 与 SDK 仓库")}</h4>${qsCode("wget https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-Linux-aarch64.sh\nbash Miniforge3-Linux-aarch64.sh\n# Reopen the terminal after installation, then run:\nconda create -n amlllmlite_py310 python=3.10 -y\nconda activate amlllmlite_py310\nmkdir -p ~/workspace ~/models/llm\ncd ~/workspace\ngit clone https://github.com/Amlogic-NN/amlnn-toolkit.git\npython --version\nuname -m")}<p>${T("Skip Miniforge or git clone if already installed. Expected: Python 3.10 and aarch64. Place the model downloaded in section 02 at ~/models/llm/model.adla before continuing.","已安装 Miniforge 或已克隆仓库时跳过对应步骤。预期显示 Python 3.10 与 aarch64。继续之前，将第 02 节下载的模型放到 ~/models/llm/model.adla。")}</p><h4>${T("3.2 · Install and verify the inference package","3.2 · 安装并验证推理包")}</h4>${qsCode("cd ~/workspace/amlnn-toolkit/amlnn_toolkit_lite/amlllm_edge_toolkit_lite/whl/aarch64\nls -1\n# If this release provides requirements.txt:\nif [ -f requirements.txt ]; then python -m pip install -r requirements.txt; fi\n# Current README example; use the matching cp310/aarch64 wheel if changed\npython -m pip install ./amlllm_edge_toolkit_lite-1.1.0-cp310-cp310-linux_aarch64.whl\npython -c \"from amlllmlite.api import AMLLLMLite; print('Runtime import OK')\"")}<p>${T("Expected: Runtime import OK. If import fails, resolve the package or native-library error before loading a model. This is the lightweight inference package, not the x86 conversion Toolkit.","预期显示 Runtime import OK。若导入失败，应先排查安装包或原生库错误，再加载模型。此处安装的是轻量推理包，不是 x86 转换 Toolkit。")}</p><h4>${T("3.3 · Start the text demo","3.3 · 启动文本示例")}</h4>${qsCode("conda activate amlllmlite_py310\nls -lh ~/models/llm/model.adla\ncd ~/workspace/amlnn-toolkit/amlnn_toolkit_lite/amlllm_edge_toolkit_lite/example/base_api\npython base_api_llmlite.py --help\npython base_api_llmlite.py --model \"$HOME/models/llm/model.adla\"")}<p>${T("Expected: the welcome message and LLM@Amlogic>>> prompt. The current source accepts --model and sampling options; it does not accept --tokenizer or --model-type. The README still mentions --model-type, so the actual source and --help are used here.","预期出现欢迎信息与 LLM@Amlogic>>> 提示符。当前源码接受 --model 与采样参数，不接受 --tokenizer 或 --model-type。README 仍提到 --model-type，因此这里按实际源码和 --help 编写。")}</p><p>${T("The provided Python example sets retain_history=False, so prompts are independent by default. For application development, change the run() configuration to retain_history=True when conversation history is required.","当前 Python 示例将 retain_history=False，默认每次输入独立处理。应用开发需要多轮历史时，应将 run() 的配置改为 retain_history=True。")}</p>`)}${qsSection("llm-native","04","C++ · build and run on Android","C++ · 编译并在 Android 运行","LLM User Guide v0.3",`<p>${T("This worked example targets Android arm64. Build on an Ubuntu PC, then transfer the executable and model through ADB. Linux native applications use the corresponding Yocto / Buildroot script and a compatible toolchain; do not use an Android binary on Linux.","此操作示例采用 Android arm64：在 Ubuntu PC 编译，通过 ADB 传输程序与模型。Linux 原生应用应选择对应的 Yocto / Buildroot 脚本与兼容工具链，不要在 Linux 上运行 Android 程序。")}</p><h4>${T("4.1 · Host PC: build the program","4.1 · 主机 PC：构建程序")}</h4>${qsCode("mkdir -p ~/workspace\ncd ~/workspace\ngit clone https://github.com/Amlogic-NN/amlnn-toolkit.git\ncd amlnn-toolkit/amlnn_runtime/llm_runtime/example/base_api\n# Edit ANDROID_NDK_PATH in build-android64.sh to your installed NDK\n# The repository script uses Android NDK r25c\nbash build-android64.sh\nls -lh install/android64/base_api_llm install/android64/base_api_vlm")}<p>${T("Skip git clone if the checkout exists. Expected: both executable files appear under install/android64/. If compilation fails, check the NDK path, CMake and the matching LLMSDK library directory before deploying.","仓库已存在时跳过 git clone。预期 install/android64/ 下出现两个可执行文件。编译失败时，先检查 NDK 路径、CMake 与匹配的 LLMSDK 库目录，再进行部署。")}</p><h4>${T("4.2 · Host PC: push the files","4.2 · 主机 PC：推送文件")}</h4><p>${T("Save the selected ADLA model on the PC as ~/models/llm/model.adla. Run the commands below from the base_api source directory used above.","将选定 ADLA 模型放在 PC 的 ~/models/llm/model.adla。下方命令继续在上一步 base_api 源码目录执行。")}</p>${qsCode("adb devices\nadb shell \"mkdir -p /data/local/tmp/llm_quickstart\"\nadb push install/android64/base_api_llm /data/local/tmp/llm_quickstart/\nadb push \"$HOME/models/llm/model.adla\" /data/local/tmp/llm_quickstart/model.adla\n# Use the matching library from this SDK release\nadb push ../../llmsdk/android/lib64/libllmsdk.so /data/local/tmp/llm_quickstart/")}<h4>${T("4.3 · Device shell: start the demo","4.3 · 设备 Shell：启动示例")}</h4>${qsCode("adb shell\ncd /data/local/tmp/llm_quickstart\nls -lh\nchmod +x base_api_llm\nexport LD_LIBRARY_PATH=/data/local/tmp/llm_quickstart:/vendor/lib64\n./base_api_llm --help\n./base_api_llm --model_path ./model.adla --retain_history 1")}<p>${T("Expected: LLM@Amlogic>>>. The --retain_history 1 setting keeps conversation history for this C++ example. If a required shared library is missing, deploy the matching dependency from your board release; do not mix arbitrary driver and runtime versions.","预期出现 LLM@Amlogic>>>。此 C++ 示例通过 --retain_history 1 保留历史。若提示缺少动态库，需部署板端发布包中匹配的依赖，不要随意混用驱动与运行库版本。")}</p>`)}${qsSection("llm-chat","05","Verify a conversation","验证一次对话","LLM User Guide v0.3",`<p>${T("After either route reaches the input prompt, type the question below and press Enter. Do not type the shell commands into the model chat interface.","任一路线出现输入提示后，输入下方问题并按回车。不要在模型聊天界面中输入 Shell 命令。")}</p>${qsCode("There are 35 chickens and rabbits in total, with 94 legs. How many chickens and rabbits are there?")}<p>${T("Check that text streams to the terminal and generation finishes normally. The mathematical answer is 23 chickens and 12 rabbits; the wording and reasoning may vary by model and sampling. This is a functional example, not an accuracy benchmark.","检查文本逐步输出且正常结束。该题数学答案为 23 只鸡、12 只兔，具体措辞与推理过程随模型及采样变化。这是功能示例，不代表精度评测。")}</p>${llmUserExample("llm")}<p>${T("Interactive commands: new_talk clears history, break interrupts generation, exit quits. If you need latency or speed measurements, record the chip, model, context, prompt and software versions together with first-token latency, decode tokens/s and memory.","交互命令：new_talk 清空历史，break 请求中断，exit 退出。需要测量性能时，将芯片、模型、上下文、Prompt 与软件版本和首 Token 延迟、Decode tokens/s、内存一起记录。")}</p>`)}${llmVLMWalkthrough()}${llmTroubleDetails()}`;bindPortalLinks(host);host.querySelectorAll("[data-copy]").forEach(b=>b.onclick=async()=>{try{await navigator.clipboard.writeText(b.parentElement.querySelector("code").textContent);b.textContent=T("Copied","已复制")}catch{b.textContent=T("Select and copy the code","请选中代码复制")}})}

/* Mobile drawer: mirrors the desktop nav so every section (and its sub-items) is reachable. */
(function initDrawer(){
 const toggle=document.getElementById('menu-toggle'),drawer=document.getElementById('drawer'),
       closeBtn=document.getElementById('drawer-close'),backdrop=document.getElementById('drawer-backdrop'),
       drawerNav=document.getElementById('drawer-nav'),liveNav=document.getElementById('nav');
 if(!toggle||!drawer||!drawerNav||!liveNav)return;
 function setOpen(open){
   drawer.hidden=!open;document.body.classList.toggle('drawer-open',open);
   toggle.setAttribute('aria-expanded',String(open));drawer.setAttribute('aria-hidden',String(!open));
   if(open){const first=drawerNav.querySelector('button');if(first)first.focus({preventScroll:true})}
 }
 const label=document.getElementById('menu-label');
 function syncLabel(){if(label)label.textContent=document.documentElement.lang==='zh-CN'?'目录':'Menu'}
 syncLabel();
 const langBtn=document.getElementById('language-toggle');
 if(langBtn)langBtn.addEventListener('click',function(){setTimeout(syncLabel,0)});
 toggle.addEventListener('click',function(){setOpen(drawer.hidden)});
 closeBtn.addEventListener('click',function(){setOpen(false)});
 backdrop.addEventListener('click',function(){setOpen(false)});
 document.addEventListener('keydown',function(e){if(e.key==='Escape'&&!drawer.hidden)setOpen(false)});
 drawerNav.addEventListener('click',function(e){
   const b=e.target.closest('[data-section]');
   if(b){selectSection(b.dataset.section);setOpen(false)}
 });
 const mirror=function(){if(drawerNav.innerHTML!==liveNav.innerHTML)drawerNav.innerHTML=liveNav.innerHTML};
 new MutationObserver(mirror).observe(liveNav,{childList:true,subtree:true});
 mirror();
})();
selectSection(section);
// Reveal the below-the-fold shell in the same frame as the first render, so it
// appears instead of being pushed down (that push was the page's only layout shift).
document.querySelector('main > footer').hidden=false;
document.querySelector('.community-support').hidden=false;
initLanguage();
initCommunity();

if('serviceWorker' in navigator){addEventListener('load',function(){navigator.serviceWorker.register('sw.js').catch(function(){})})}
from reportlab.platypus import BaseDocTemplate, Frame, PageTemplate, Paragraph, Spacer, ListFlowable, ListItem
from reportlab.platypus import FrameBreak
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import inch
from reportlab.lib.enums import TA_LEFT

# ---------- DOCUMENT SETUP ----------
doc = BaseDocTemplate("professional_resume.pdf", pagesize=A4)
width, height = A4

# Sidebar width
sidebar_width = 2.2 * inch

# Frames
frame_left = Frame(
    0,
    0,
    sidebar_width,
    height,
    leftPadding=20,
    rightPadding=20,
    topPadding=40,
    bottomPadding=40,
)

frame_right = Frame(
    sidebar_width,
    0,
    width - sidebar_width,
    height,
    leftPadding=40,
    rightPadding=40,
    topPadding=60,
    bottomPadding=40,
)

# ---------- BACKGROUND DRAW FUNCTION ----------
def draw_background(canvas, doc):
    # Dark sidebar
    canvas.setFillColor(colors.HexColor("#1C1C1C"))
    canvas.rect(0, 0, sidebar_width, height, fill=1)

# Page template
template = PageTemplate(frames=[frame_left, frame_right], onPage=draw_background)
doc.addPageTemplates([template])

# ---------- STYLES ----------
styles = getSampleStyleSheet()

name_style = ParagraphStyle(
    'NameStyle',
    parent=styles['Heading1'],
    fontSize=28,
    textColor=colors.HexColor("#333333"),
    spaceAfter=4
)

role_style = ParagraphStyle(
    'RoleStyle',
    parent=styles['Normal'],
    fontSize=14,
    textColor=colors.grey,
    spaceAfter=20
)

sidebar_heading = ParagraphStyle(
    'SidebarHeading',
    parent=styles['Heading2'],
    fontSize=14,
    textColor=colors.white,
    spaceBefore=15,
    spaceAfter=8
)

sidebar_text = ParagraphStyle(
    'SidebarText',
    parent=styles['Normal'],
    fontSize=10,
    textColor=colors.white,
    leading=14
)

section_heading = ParagraphStyle(
    'SectionHeading',
    parent=styles['Heading2'],
    fontSize=16,
    textColor=colors.HexColor("#111111"),
    spaceBefore=10,
    spaceAfter=6
)

normal_text = ParagraphStyle(
    'NormalText',
    parent=styles['Normal'],
    fontSize=11,
    leading=15
)

# ---------- USER DATA ----------
name = "Lily Chu"
role = "Graphic Designer"

about = "I possess a strong understanding of design principles and user needs, allowing me to craft templates that are both visually appealing and functionally effective."

skills = ["Graphic Design", "Computer Programming", "Content Marketing", "Digital Marketing", "Video Editing"]

contact = [
    "+123-456-7890",
    "hello@email.com",
    "www.website.com",
    "123 Anywhere St, Any City"
]

education = [
    "2015 - 2017 | School of Design University",
    "2017 - 2019 | School of Marketing University"
]

experience = [
    "Senior Graphic Designer (2019-2020)",
    "• Created 100+ graphic designs",
    "• Completed complex branding projects",
    "",
    "Senior Graphic Designer (2020-Present)",
    "• Managed marketing campaigns",
    "• Improved brand visibility by 40%"
]

# ---------- BUILD CONTENT ----------
elements = []

# LEFT SIDEBAR CONTENT
elements.append(Paragraph("ABOUT ME", sidebar_heading))
elements.append(Paragraph(about, sidebar_text))

elements.append(Paragraph("SKILLS", sidebar_heading))
elements.append(ListFlowable(
    [ListItem(Paragraph(skill, sidebar_text)) for skill in skills],
    bulletType='bullet'
))

elements.append(Paragraph("CONTACT", sidebar_heading))
elements.append(ListFlowable(
    [ListItem(Paragraph(item, sidebar_text)) for item in contact],
    bulletType='bullet'
))

# Move to right column
elements.append(FrameBreak())

# RIGHT MAIN CONTENT
elements.append(Paragraph(name, name_style))
elements.append(Paragraph(role, role_style))

elements.append(Paragraph("EDUCATION", section_heading))
for edu in education:
    elements.append(Paragraph(edu, normal_text))
    elements.append(Spacer(1, 6))

elements.append(Spacer(1, 12))

elements.append(Paragraph("WORK EXPERIENCE", section_heading))
for exp in experience:
    elements.append(Paragraph(exp, normal_text))
    elements.append(Spacer(1, 6))

# Build PDF
doc.build(elements)

print("Professional Resume Generated!")
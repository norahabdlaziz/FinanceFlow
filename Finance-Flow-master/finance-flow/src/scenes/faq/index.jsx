import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          What is the financeflow?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          The  financeflow is a tool that helps you manage your financial resources by tracking your expenses and income. It also provides you with financial analysis and recommendations to improve your financial lifestyle.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          How can I start using the system?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          You can start using the system immediately by accessing the website and beginning to log your income and expenses without the need to sign up or log in. The system will provide you with periodic reports and recommendations based on your financial patterns.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          Is the system only available on a web browser?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes, the system is only available through a web browser, allowing you to access your financial data directly from the browser on any device.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          How does the system keep my financial data secure?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Your data is secured using AWS IAM for identity and access management, and the system’s performance is continuously monitored through Amazon CloudWatch to ensure protection.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          How can I track my expenses and income?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          You can easily enter your expense and income data through the user interface on the website. The system will provide you with detailed reports on your spending and earnings.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;

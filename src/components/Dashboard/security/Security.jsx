import {
  Box,
  Container,
  Typography,
  Button,
  Divider,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@emotion/react";

import { MdLaptopMac, MdPhoneIphone } from "react-icons/md";

const Security = () => {
  const theme = useTheme();
  const matches = useMediaQuery("(max-width:800px)");

  return (
    <Box bgcolor={theme.primary.bg} height="100%">
      <Container maxWidth="md">
        <Typography
          mt={0.2}
          ml={{ xs: 1, md: 0 }}
          mb={3}
          variant="body1"
          sx={{
            fontSize: { md: "42px", xs: "28px" },
            color: theme.primary.text,
            fontWeight: "800",
          }}
        >
          Profile Settings
        </Typography>

        <Typography
          my={1}
          sx={{
            fontSize: "18px",
            fontWeight: "bold",
            color: theme.primary.text,
          }}
        >
          Login Details
        </Typography>

        <Box
          p={2}
          sx={{
            borderRadius: "16px",
            background: theme.primary.bgProfile,
          }}
        >
          <Typography
            sx={{
              fontSize: "12px",
              color: "#5d5d5b",
            }}
          >
            Current password
          </Typography>
          <Typography
            py={1}
            sx={{
              fontSize: "14px",
              fontWeight: "700",
              color: theme.primary.text,
            }}
          >
            ••••••
          </Typography>
          <Divider fullWidth color="#CFDBD5" />

          <Typography
            mt={1}
            sx={{
              fontSize: "12px",
              color: "#5d5d5b",
            }}
          >
            Security questions
          </Typography>
          <Typography
            py={1}
            sx={{
              fontSize: "14px",
              fontWeight: "700",
              color: theme.primary.text,
            }}
          >
            Your fathers name
          </Typography>
          <Divider fullWidth color="#CFDBD5" />

          <Typography
            mt={1}
            sx={{
              fontSize: "12px",
              color: "#5d5d5b",
            }}
          >
            2-Step verification
          </Typography>
          <Typography
            py={1}
            sx={{
              fontSize: "14px",
              fontWeight: "700",
              color: theme.primary.text,
            }}
          >
            Enabled
          </Typography>
        </Box>

        <Typography
          my={1}
          sx={{
            fontSize: "18px",
            fontWeight: "bold",
            color: theme.primary.text,
          }}
        >
          Security credentials
        </Typography>

        <Box
          p={2}
          sx={{
            borderRadius: "16px",
            background: theme.primary.bgProfile,
          }}
        >
          <Box mb={1} sx={{ display: "flex" }}>
            <Box
              sx={{
                background: "transparent",
                px: 1,
                height: "36px",
                borderRadius: "70px",
                display: "flex",
                alignItems: "center",
                border: "1px solid rgba(207, 219, 213, 0.15)",
              }}
            >
              <MdLaptopMac
                style={{
                  fontSize: "20px",
                  color: theme.primary.text,
                }}
              />
            </Box>

            <Box ml={1} flexGrow="1">
              <Typography
                sx={{
                  fontSize: "12px",
                  color: "#5d5d5b",
                }}
              >
                01 Apr 2021 at 06:25PM
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "700",
                  color: theme.primary.text,
                }}
              >
                Mac OS Safari 15.1
              </Typography>
            </Box>
            {!matches && (
              <Box
                width="134px"
                height="40px"
                display={"flex"}
                justifyContent="center"
                alignItems="center"
                fontSize="14px"
                sx={{
                  color: "#fff",
                  cursor: "pointer",
                  border: "1px transparent",
                  borderRadius: "23px",
                  backgroundImage:
                    " linear-gradient(#172225, #172225  ),linear-gradient(92.1deg, #0DF17F 0.3%, #00CDFF 74.1%)",
                  backgroundOrigin: "border-box",
                  backgroundClip: "content-box, border-box",
                  boxShadow: "3px 8px 17px rgba(0, 0, 0, 0.15)",
                  padding: "2px",
                }}
              >
                Current session
              </Box>
            )}
          </Box>
          <Divider fullWidth color="#CFDBD5" />

          <Box my={1} sx={{ display: "flex" }}>
            <Box
              sx={{
                background: "transparent",
                px: 1,
                height: "36px",
                borderRadius: "70px",
                display: "flex",
                alignItems: "center",
                border: "1px solid rgba(207, 219, 213, 0.15)",
              }}
            >
              <MdLaptopMac
                style={{
                  fontSize: "20px",
                  color: theme.primary.text,
                }}
              />
            </Box>
            <Box ml={1}>
              <Typography
                sx={{
                  fontSize: "12px",
                  color: "#5d5d5b",
                }}
              >
                20 Oct 2021 at 04:32AM
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "700",
                  color: theme.primary.text,
                }}
              >
                Windows 11 Mozilla Firefox
              </Typography>
            </Box>
          </Box>
          <Divider fullWidth color="#CFDBD5" />

          <Box my={1} sx={{ display: "flex" }}>
            <Box
              sx={{
                background: "transparent",
                px: 1,
                height: "36px",
                borderRadius: "70px",
                display: "flex",
                alignItems: "center",
                border: "1px solid rgba(207, 219, 213, 0.15)",
              }}
            >
              <MdPhoneIphone
                style={{
                  fontSize: "20px",
                  color: theme.primary.text,
                }}
              />
            </Box>
            <Box ml={1}>
              <Typography
                sx={{
                  fontSize: "12px",
                  color: "#5d5d5b",
                }}
              >
                19 Oct 2021 at 06:30AM
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "700",
                  color: theme.primary.text,
                }}
              >
                IOS Safari 15.1
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box
          mt={1.5}
          mb={5}
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Button
            sx={{
              background: "#0DF17F",
              borderRadius: "23px",
              color: "#000",
              padding: "10px 20px",
              "&:hover": {
                background: "#0DF17Fa1",
              },
            }}
          >
            Update Settings
          </Button>
          <Button
            sx={{
              width: "165px",
              height: "46px",
              background: theme.primary.bgProfile1,
              borderRadius: "23px",
              color: theme.primary.textPurple,
              padding: "10px 20px",
              "&:hover": {
                background: "#5d5d5ba1",
              },
            }}
          >
            Cancel
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Security;

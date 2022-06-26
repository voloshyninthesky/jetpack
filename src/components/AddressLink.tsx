import { Box, IconButton, Link, styled, Typography } from "@mui/material";
import CopyToClipboard from "react-copy-to-clipboard";
import useNotification from "hooks/useNotification";
import CopyImg from "assets/copy.svg";

interface Props {
  address?: string | null;
  href?: string;
}

const StyledContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
 width:'100%',
  "& a": {
    textDecoration: "none",
    color: "unset",
  },
});

const StyledImg = styled("img")({
  width: 20,
});

const StyledLink = styled('div')({
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  width: "80%",
  color: "#0688CC!important",
});

function AddressLink({ address, href }: Props) {
  const { showNotification } = useNotification();
  const onCopy = () => {
    showNotification("Address Copied!", "success", undefined, 3000);
  };

  return (
    <StyledContainer className="address-link">
      <StyledLink>
      <Link target="_blank" href={href}>
       {address || "-"}
      </Link>
      </StyledLink>
      {address && (
        <CopyToClipboard text={address} onCopy={onCopy}>
          <IconButton>
            <StyledImg src={CopyImg} />
          </IconButton>
        </CopyToClipboard>
      )}
    </StyledContainer>
  );
}

export default AddressLink;
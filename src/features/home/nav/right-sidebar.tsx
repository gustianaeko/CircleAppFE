import { Box } from "@chakra-ui/react";

import { AuthorMetaCard } from "../../follow/component/author-meta-card";
import { SuggestionCard } from "../../follow/component/suggestion-card";
import { ProfileCard } from "../../follow/component/profile-card";

export function RightSidebar() {
  return (
    <Box
      width={"370px"}
      height={"100vh"}
      position={"fixed"}
      paddingTop={"12px"}
      borderLeft={"1px solid #545454"}
    >
      <ProfileCard />
      <SuggestionCard />
      <AuthorMetaCard />
    </Box>
  );
}

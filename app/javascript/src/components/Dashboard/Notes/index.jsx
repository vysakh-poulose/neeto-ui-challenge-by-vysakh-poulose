import React, { useState, useEffect } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { Plus } from "neetoicons";
import { Button, PageLoader } from "neetoui";
import { Container, Header } from "neetoui/layouts";
import { useTranslation } from "react-i18next";

import notesApi from "apis/notes";
import EmptyState from "components/commons/EmptyState";

import Create from "./Create";
import List from "./List";
import Menubar from "./Menubar";

const Notes = () => {
  const { t } = useTranslation();

  const [loading, setLoading] = useState(true);
  const [isNewPaneOpen, setIsNewPaneOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      setLoading(true);
      const {
        data: { notes },
      } = await notesApi.fetch();
      setNotes(notes);
    } catch (error) {
      logger.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <PageLoader />;
  }

  return (
    <>
      <Menubar showMenu={showMenu} />
      <Container>
        <Header
          menuBarToggle={() => setShowMenu(prev => !prev)}
          title={t("notes.header.title")}
          actionBlock={
            <Button
              icon={Plus}
              label={t("notes.header.add")}
              size="small"
              onClick={() => setIsNewPaneOpen(true)}
            />
          }
          searchProps={{
            placeholder: t("common.searchPlaceholder"),
            value: searchTerm,
            onChange: event => setSearchTerm(event.target.value),
          }}
        />
        {notes.length ? (
          <List notes={notes} />
        ) : (
          <EmptyState
            image={EmptyNotesListImage}
            primaryAction={() => setIsNewPaneOpen(true)}
            primaryActionLabel={t("notes.emptyState.primaryActionLabel")}
            subtitle={t("notes.emptyState.subtitle")}
            title={t("notes.emptyState.title")}
          />
        )}
        <Create
          fetchNotes={fetchNotes}
          setShowPane={setIsNewPaneOpen}
          showPane={isNewPaneOpen}
        />
      </Container>
    </>
  );
};

export default Notes;

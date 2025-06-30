import { Drawer, DrawerBody, DrawerContent, DrawerHeader } from '@heroui/react'
import { useStore } from '@tanstack/react-store'

import { closeSheet, sheetStore } from '~/store'

export default function SheetContainer() {
  const { isSheetOpen, size, data, title } = useStore(sheetStore)

  const body = <div />

  return (
    <Drawer
      isDismissable={false}
      isKeyboardDismissDisabled={true}
      isOpen={isSheetOpen}
      size={size}
      onClose={closeSheet}
    >
      <DrawerContent>
        <DrawerHeader className="flex flex-col gap-1">{title}</DrawerHeader>
        <DrawerBody>{body}</DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}

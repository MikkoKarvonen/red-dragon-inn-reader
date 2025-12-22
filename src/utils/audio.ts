export const getAudioPath = (
    chapterNumber: number,
    sectionType: 'prologue' | 'epilogue' | 'reinforcements' | 'part-2',
    compact: boolean,
    index?: number
): string => {
    const chapterFolder = `chapter-${chapterNumber}`
    if (sectionType === 'reinforcements' && index !== undefined) {
        return `${chapterFolder}/reinforcements-${index}.mp3`
    }
    if ((sectionType === 'prologue' || sectionType === 'epilogue' || sectionType === 'part-2') && compact) {
        return `${chapterFolder}/${sectionType}-compact.mp3`
    }
    return `${chapterFolder}/${sectionType}.mp3`
}


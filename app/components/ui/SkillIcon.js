const SkillIcon = ({ icon: Icon, name, color }) => (
    <div className="flex flex-col items-center gap-2 group">
        <Icon
            className="size-12 text-white transition-colors duration-300 group-hover:text-[var(--hover-color)]"
            style={{ '--hover-color': color }}
        />
        <p className="text-white text-sm">{name}</p>
    </div>
);

export default SkillIcon;
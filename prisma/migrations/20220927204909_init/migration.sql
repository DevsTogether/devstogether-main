-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VerificationToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "username" TEXT,
    "email" TEXT,
    "emailVerified" TIMESTAMP(3),
    "image" TEXT,
    "bio" TEXT,
    "reputation" INTEGER NOT NULL DEFAULT 0,
    "helpedUsers" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "banned" BOOLEAN NOT NULL DEFAULT false,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "specialization" TEXT,
    "levelId" INTEGER NOT NULL DEFAULT 1,
    "roleId" INTEGER NOT NULL DEFAULT 3,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Role" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "roles" JSONB,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Level" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "reputationRequired" INTEGER,

    CONSTRAINT "Level_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Language" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Language_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserLanguage" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "languageId" INTEGER NOT NULL,

    CONSTRAINT "UserLanguage_pkey" PRIMARY KEY ("id","userId","languageId")
);

-- CreateTable
CREATE TABLE "Medal" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "details" TEXT,
    "type" TEXT,

    CONSTRAINT "Medal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserMedal" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "medalId" INTEGER NOT NULL,
    "obtainedAt" TIMESTAMP(3),

    CONSTRAINT "UserMedal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Integration" (
    "id" TEXT NOT NULL,
    "integrationData" JSONB,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Integration_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Question" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "visits" INTEGER NOT NULL DEFAULT 0,
    "reward" INTEGER,
    "type" TEXT DEFAULT E'default',
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "userId" TEXT,

    CONSTRAINT "Question_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vote" (
    "id" TEXT NOT NULL,
    "point" INTEGER,
    "userId" TEXT NOT NULL,
    "questionId" TEXT,
    "responseId" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Vote_pkey" PRIMARY KEY ("id","userId")
);

-- CreateTable
CREATE TABLE "Response" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "questionId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Response_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "about" TEXT,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "QuestionTag" (
    "id" SERIAL NOT NULL,
    "tagId" INTEGER,
    "questionId" TEXT,

    CONSTRAINT "QuestionTag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Report" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "userReportedId" TEXT,
    "origin" TEXT,
    "reason" TEXT,
    "details" TEXT,

    CONSTRAINT "Report_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comment" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "responseId" TEXT,
    "questionId" TEXT,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Call" (
    "id" TEXT NOT NULL,
    "start" TIMESTAMP(3),
    "expires" TIMESTAMP(3),
    "isOpen" BOOLEAN NOT NULL DEFAULT false,
    "questionId" TEXT,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Call_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_token_key" ON "VerificationToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_identifier_token_key" ON "VerificationToken"("identifier", "token");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Role_id_key" ON "Role"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Level_id_key" ON "Level"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Language_id_key" ON "Language"("id");

-- CreateIndex
CREATE UNIQUE INDEX "UserLanguage_id_key" ON "UserLanguage"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Medal_id_key" ON "Medal"("id");

-- CreateIndex
CREATE UNIQUE INDEX "UserMedal_id_key" ON "UserMedal"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Integration_id_key" ON "Integration"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Question_id_key" ON "Question"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Vote_id_key" ON "Vote"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Response_id_key" ON "Response"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Tag_id_key" ON "Tag"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Tag_name_key" ON "Tag"("name");

-- CreateIndex
CREATE UNIQUE INDEX "QuestionTag_id_key" ON "QuestionTag"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Report_id_key" ON "Report"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Comment_id_key" ON "Comment"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Call_id_key" ON "Call"("id");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_levelId_fkey" FOREIGN KEY ("levelId") REFERENCES "Level"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserLanguage" ADD CONSTRAINT "UserLanguage_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserLanguage" ADD CONSTRAINT "UserLanguage_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "Language"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserMedal" ADD CONSTRAINT "UserMedal_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserMedal" ADD CONSTRAINT "UserMedal_medalId_fkey" FOREIGN KEY ("medalId") REFERENCES "Medal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Integration" ADD CONSTRAINT "Integration_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vote" ADD CONSTRAINT "Vote_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vote" ADD CONSTRAINT "Vote_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vote" ADD CONSTRAINT "Vote_responseId_fkey" FOREIGN KEY ("responseId") REFERENCES "Response"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Response" ADD CONSTRAINT "Response_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Response" ADD CONSTRAINT "Response_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuestionTag" ADD CONSTRAINT "QuestionTag_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuestionTag" ADD CONSTRAINT "QuestionTag_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tag"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Report" ADD CONSTRAINT "Report_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_responseId_fkey" FOREIGN KEY ("responseId") REFERENCES "Response"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Call" ADD CONSTRAINT "Call_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Call" ADD CONSTRAINT "Call_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddLanguages
INSERT INTO Language(id, name) VALUES (1, 'JavaScript');
INSERT INTO Language(id, name) VALUES (2, 'HTML');
INSERT INTO Language(id, name) VALUES (3, 'CSS');
INSERT INTO Language(id, name) VALUES (4, 'TypeScript');
INSERT INTO Language(id, name) VALUES (6, 'C');
INSERT INTO Language(id, name) VALUES (7, 'C++');
INSERT INTO Language(id, name) VALUES (8, 'C#');
INSERT INTO Language(id, name) VALUES (9, 'Java');
INSERT INTO Language(id, name) VALUES (10, 'PHP');
INSERT INTO Language(id, name) VALUES (11, 'Rust');
INSERT INTO Language(id, name) VALUES (12, 'Python');
INSERT INTO Language(id, name) VALUES (13, 'Go');
INSERT INTO Language(id, name) VALUES (14, 'Flutter');
INSERT INTO Language(id, name) VALUES (15, 'Ruby');
INSERT INTO Language(id, name) VALUES (16, '.NET');
INSERT INTO Language(id, name) VALUES (17, 'Lua');

-- AddRoles
INSERT INTO `Role`(`id`, `name`, `roles`) VALUES (1, 'admin', '[]');
INSERT INTO `Role`(`id`, `name`, `roles`) VALUES (2, 'mod', '[]');
INSERT INTO `Role`(`id`, `name`, `roles`) VALUES (3, 'member', '[]');

-- AddMedals
INSERT INTO `Medal` (`id`, `name`, `details`, `type`) VALUES ('11', 'primeiros passos', 'Personalize seu perfil com todas as informações e diga mais sobre você', 'bronze');
INSERT INTO `Medal` (`id`, `name`, `details`, `type`) VALUES ('12', 'Benfeitor', 'Faça sua 1ª pergunta na comunidade', 'bronze');
INSERT INTO `Medal` (`id`, `name`, `details`, `type`) VALUES ('13', 'Altruísta', 'Ajude alguém na comunidade pela 1ª vez', 'bronze');
INSERT INTO `Medal` (`id`, `name`, `details`, `type`) VALUES ('14', 'Investidor', 'Crie uma pergunta na comunidade com uma recompensa', 'bronze');
INSERT INTO `Medal` (`id`, `name`, `details`, `type`) VALUES ('15', 'Bom instrutor', 'Receba nota máxima ao ajudar alguém na comunidade', 'bronze');
INSERT INTO `Medal` (`id`, `name`, `details`, `type`) VALUES ('16', 'Esqueceram de mim', 'Receba nota máxima em 5 perguntas na comunidade', 'bronze');
INSERT INTO `Medal` (`id`, `name`, `details`, `type`) VALUES ('17', 'Policial', 'Fez uma pergunta que ficou uma semana sem respostas', 'bronze');
INSERT INTO `Medal` (`id`, `name`, `details`, `type`) VALUES ('18', 'Me ajuda aqui?', 'Peça ajuda a alguém de modo privado', 'bronze');
INSERT INTO `Medal` (`id`, `name`, `details`, `type`) VALUES ('19', 'Policial', 'Servir como moderador por pelo menos 1 mês', 'bronze');
INSERT INTO `Medal` (`id`, `name`, `details`, `type`) VALUES ('20', 'colaborador', 'Ajude 10 pessoas na comunidade em uma semana', 'prata');
INSERT INTO `Medal` (`id`, `name`, `details`, `type`) VALUES ('21', 'Tagarela', 'Fique 1 hora consecutiva em uma única call', 'prata');
INSERT INTO `Medal` (`id`, `name`, `details`, `type`) VALUES ('22', 'Entusiasta', 'Visite o site por 1 semana consecutiva', 'prata');
INSERT INTO `Medal` (`id`, `name`, `details`, `type`) VALUES ('23', 'Épico', 'Ganhe 200 pontos de reputação no mesmo dia', 'prata');
INSERT INTO `Medal` (`id`, `name`, `details`, `type`) VALUES ('24', 'Aniversariante', '"Membro ativo por um ano,obtendo pelo menos uma reputação de 200"', 'prata');
INSERT INTO `Medal` (`id`, `name`, `details`, `type`) VALUES ('25', 'Feliz em ajudar', 'Ajude 30 pessoas na comunidade', 'prata');
INSERT INTO `Medal` (`id`, `name`, `details`, `type`) VALUES ('26', 'Censo', 'Ajude em uma pesquisa da plataforma', 'prata');
INSERT INTO `Medal` (`id`, `name`, `details`, `type`) VALUES ('27', 'Gosto dos meus colegas', 'Peça ajuda 10 vezes de forma privada', 'prata');
INSERT INTO `Medal` (`id`, `name`, `details`, `type`) VALUES ('31', 'Bom cidadão', 'Leia toda a sessão “manual do bom membro”', 'platina');
INSERT INTO `Medal` (`id`, `name`, `details`, `type`) VALUES ('32', 'Super colaborador', 'Ajude pelo menos 1 pessoa na comunidade por 1 mês consecutivo', 'platina');
INSERT INTO `Medal` (`id`, `name`, `details`, `type`) VALUES ('28', 'Urgência', 'Faça uma pergunta pública oferecendo a maior recompensa possível', 'ouro');
INSERT INTO `Medal` (`id`, `name`, `details`, `type`) VALUES ('29', 'Fanático', 'Visite o site por 30 dias consecutivos', 'ouro');
INSERT INTO `Medal` (`id`, `name`, `details`, `type`) VALUES ('30', 'Lendário', 'Ganhe 200 pontos de reputação no mesmo dia por uma semana', 'ouro');

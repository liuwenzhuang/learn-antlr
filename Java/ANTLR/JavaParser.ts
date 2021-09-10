// Generated from Java.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { JavaListener } from "./JavaListener";

export class JavaParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly T__28 = 29;
	public static readonly T__29 = 30;
	public static readonly T__30 = 31;
	public static readonly T__31 = 32;
	public static readonly T__32 = 33;
	public static readonly T__33 = 34;
	public static readonly T__34 = 35;
	public static readonly T__35 = 36;
	public static readonly T__36 = 37;
	public static readonly T__37 = 38;
	public static readonly T__38 = 39;
	public static readonly T__39 = 40;
	public static readonly T__40 = 41;
	public static readonly T__41 = 42;
	public static readonly T__42 = 43;
	public static readonly T__43 = 44;
	public static readonly T__44 = 45;
	public static readonly T__45 = 46;
	public static readonly T__46 = 47;
	public static readonly T__47 = 48;
	public static readonly T__48 = 49;
	public static readonly T__49 = 50;
	public static readonly T__50 = 51;
	public static readonly T__51 = 52;
	public static readonly T__52 = 53;
	public static readonly T__53 = 54;
	public static readonly T__54 = 55;
	public static readonly T__55 = 56;
	public static readonly T__56 = 57;
	public static readonly T__57 = 58;
	public static readonly T__58 = 59;
	public static readonly T__59 = 60;
	public static readonly T__60 = 61;
	public static readonly T__61 = 62;
	public static readonly T__62 = 63;
	public static readonly T__63 = 64;
	public static readonly T__64 = 65;
	public static readonly T__65 = 66;
	public static readonly T__66 = 67;
	public static readonly T__67 = 68;
	public static readonly T__68 = 69;
	public static readonly T__69 = 70;
	public static readonly T__70 = 71;
	public static readonly T__71 = 72;
	public static readonly T__72 = 73;
	public static readonly T__73 = 74;
	public static readonly T__74 = 75;
	public static readonly T__75 = 76;
	public static readonly T__76 = 77;
	public static readonly T__77 = 78;
	public static readonly T__78 = 79;
	public static readonly T__79 = 80;
	public static readonly T__80 = 81;
	public static readonly T__81 = 82;
	public static readonly T__82 = 83;
	public static readonly T__83 = 84;
	public static readonly T__84 = 85;
	public static readonly T__85 = 86;
	public static readonly T__86 = 87;
	public static readonly T__87 = 88;
	public static readonly T__88 = 89;
	public static readonly HexLiteral = 90;
	public static readonly DecimalLiteral = 91;
	public static readonly OctalLiteral = 92;
	public static readonly FloatingPointLiteral = 93;
	public static readonly CharacterLiteral = 94;
	public static readonly StringLiteral = 95;
	public static readonly ENUM = 96;
	public static readonly ASSERT = 97;
	public static readonly Identifier = 98;
	public static readonly COMMENT = 99;
	public static readonly WS = 100;
	public static readonly LINE_COMMENT = 101;
	public static readonly RULE_compilationUnit = 0;
	public static readonly RULE_packageDeclaration = 1;
	public static readonly RULE_importDeclaration = 2;
	public static readonly RULE_typeDeclaration = 3;
	public static readonly RULE_classDeclaration = 4;
	public static readonly RULE_enumDeclaration = 5;
	public static readonly RULE_interfaceDeclaration = 6;
	public static readonly RULE_classOrInterfaceModifier = 7;
	public static readonly RULE_modifiers = 8;
	public static readonly RULE_typeParameters = 9;
	public static readonly RULE_typeParameter = 10;
	public static readonly RULE_typeBound = 11;
	public static readonly RULE_enumBody = 12;
	public static readonly RULE_enumConstants = 13;
	public static readonly RULE_enumConstant = 14;
	public static readonly RULE_enumBodyDeclarations = 15;
	public static readonly RULE_normalInterfaceDeclaration = 16;
	public static readonly RULE_typeList = 17;
	public static readonly RULE_classBody = 18;
	public static readonly RULE_interfaceBody = 19;
	public static readonly RULE_classBodyDeclaration = 20;
	public static readonly RULE_member = 21;
	public static readonly RULE_methodDeclaration = 22;
	public static readonly RULE_methodDeclarationRest = 23;
	public static readonly RULE_genericMethodDeclaration = 24;
	public static readonly RULE_fieldDeclaration = 25;
	public static readonly RULE_constructorDeclaration = 26;
	public static readonly RULE_interfaceBodyDeclaration = 27;
	public static readonly RULE_interfaceMemberDecl = 28;
	public static readonly RULE_interfaceMethodOrFieldDecl = 29;
	public static readonly RULE_interfaceMethodOrFieldRest = 30;
	public static readonly RULE_voidMethodDeclaratorRest = 31;
	public static readonly RULE_interfaceMethodDeclaratorRest = 32;
	public static readonly RULE_interfaceGenericMethodDecl = 33;
	public static readonly RULE_voidInterfaceMethodDeclaratorRest = 34;
	public static readonly RULE_constantDeclarator = 35;
	public static readonly RULE_variableDeclarators = 36;
	public static readonly RULE_variableDeclarator = 37;
	public static readonly RULE_constantDeclaratorsRest = 38;
	public static readonly RULE_constantDeclaratorRest = 39;
	public static readonly RULE_variableDeclaratorId = 40;
	public static readonly RULE_variableInitializer = 41;
	public static readonly RULE_arrayInitializer = 42;
	public static readonly RULE_modifier = 43;
	public static readonly RULE_packageOrTypeName = 44;
	public static readonly RULE_enumConstantName = 45;
	public static readonly RULE_typeName = 46;
	public static readonly RULE_type = 47;
	public static readonly RULE_classOrInterfaceType = 48;
	public static readonly RULE_primitiveType = 49;
	public static readonly RULE_variableModifier = 50;
	public static readonly RULE_typeArguments = 51;
	public static readonly RULE_typeArgument = 52;
	public static readonly RULE_qualifiedNameList = 53;
	public static readonly RULE_formalParameters = 54;
	public static readonly RULE_formalParameterDecls = 55;
	public static readonly RULE_formalParameterDeclsRest = 56;
	public static readonly RULE_methodBody = 57;
	public static readonly RULE_constructorBody = 58;
	public static readonly RULE_explicitConstructorInvocation = 59;
	public static readonly RULE_qualifiedName = 60;
	public static readonly RULE_literal = 61;
	public static readonly RULE_integerLiteral = 62;
	public static readonly RULE_booleanLiteral = 63;
	public static readonly RULE_annotations = 64;
	public static readonly RULE_annotation = 65;
	public static readonly RULE_annotationName = 66;
	public static readonly RULE_elementValuePairs = 67;
	public static readonly RULE_elementValuePair = 68;
	public static readonly RULE_elementValue = 69;
	public static readonly RULE_elementValueArrayInitializer = 70;
	public static readonly RULE_annotationTypeDeclaration = 71;
	public static readonly RULE_annotationTypeBody = 72;
	public static readonly RULE_annotationTypeElementDeclaration = 73;
	public static readonly RULE_annotationTypeElementRest = 74;
	public static readonly RULE_annotationMethodOrConstantRest = 75;
	public static readonly RULE_annotationMethodRest = 76;
	public static readonly RULE_annotationConstantRest = 77;
	public static readonly RULE_defaultValue = 78;
	public static readonly RULE_block = 79;
	public static readonly RULE_blockStatement = 80;
	public static readonly RULE_localVariableDeclarationStatement = 81;
	public static readonly RULE_localVariableDeclaration = 82;
	public static readonly RULE_variableModifiers = 83;
	public static readonly RULE_statement = 84;
	public static readonly RULE_catches = 85;
	public static readonly RULE_catchClause = 86;
	public static readonly RULE_formalParameter = 87;
	public static readonly RULE_switchBlock = 88;
	public static readonly RULE_switchBlockStatementGroup = 89;
	public static readonly RULE_switchLabel = 90;
	public static readonly RULE_forControl = 91;
	public static readonly RULE_forInit = 92;
	public static readonly RULE_enhancedForControl = 93;
	public static readonly RULE_forUpdate = 94;
	public static readonly RULE_parExpression = 95;
	public static readonly RULE_expressionList = 96;
	public static readonly RULE_statementExpression = 97;
	public static readonly RULE_constantExpression = 98;
	public static readonly RULE_expression = 99;
	public static readonly RULE_primary = 100;
	public static readonly RULE_creator = 101;
	public static readonly RULE_createdName = 102;
	public static readonly RULE_innerCreator = 103;
	public static readonly RULE_explicitGenericInvocation = 104;
	public static readonly RULE_arrayCreatorRest = 105;
	public static readonly RULE_classCreatorRest = 106;
	public static readonly RULE_nonWildcardTypeArguments = 107;
	public static readonly RULE_arguments = 108;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"compilationUnit", "packageDeclaration", "importDeclaration", "typeDeclaration", 
		"classDeclaration", "enumDeclaration", "interfaceDeclaration", "classOrInterfaceModifier", 
		"modifiers", "typeParameters", "typeParameter", "typeBound", "enumBody", 
		"enumConstants", "enumConstant", "enumBodyDeclarations", "normalInterfaceDeclaration", 
		"typeList", "classBody", "interfaceBody", "classBodyDeclaration", "member", 
		"methodDeclaration", "methodDeclarationRest", "genericMethodDeclaration", 
		"fieldDeclaration", "constructorDeclaration", "interfaceBodyDeclaration", 
		"interfaceMemberDecl", "interfaceMethodOrFieldDecl", "interfaceMethodOrFieldRest", 
		"voidMethodDeclaratorRest", "interfaceMethodDeclaratorRest", "interfaceGenericMethodDecl", 
		"voidInterfaceMethodDeclaratorRest", "constantDeclarator", "variableDeclarators", 
		"variableDeclarator", "constantDeclaratorsRest", "constantDeclaratorRest", 
		"variableDeclaratorId", "variableInitializer", "arrayInitializer", "modifier", 
		"packageOrTypeName", "enumConstantName", "typeName", "type", "classOrInterfaceType", 
		"primitiveType", "variableModifier", "typeArguments", "typeArgument", 
		"qualifiedNameList", "formalParameters", "formalParameterDecls", "formalParameterDeclsRest", 
		"methodBody", "constructorBody", "explicitConstructorInvocation", "qualifiedName", 
		"literal", "integerLiteral", "booleanLiteral", "annotations", "annotation", 
		"annotationName", "elementValuePairs", "elementValuePair", "elementValue", 
		"elementValueArrayInitializer", "annotationTypeDeclaration", "annotationTypeBody", 
		"annotationTypeElementDeclaration", "annotationTypeElementRest", "annotationMethodOrConstantRest", 
		"annotationMethodRest", "annotationConstantRest", "defaultValue", "block", 
		"blockStatement", "localVariableDeclarationStatement", "localVariableDeclaration", 
		"variableModifiers", "statement", "catches", "catchClause", "formalParameter", 
		"switchBlock", "switchBlockStatementGroup", "switchLabel", "forControl", 
		"forInit", "enhancedForControl", "forUpdate", "parExpression", "expressionList", 
		"statementExpression", "constantExpression", "expression", "primary", 
		"creator", "createdName", "innerCreator", "explicitGenericInvocation", 
		"arrayCreatorRest", "classCreatorRest", "nonWildcardTypeArguments", "arguments",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'package'", "';'", "'import'", "'static'", "'.'", "'*'", "'class'", 
		"'extends'", "'implements'", "'public'", "'protected'", "'private'", "'abstract'", 
		"'final'", "'strictfp'", "'<'", "','", "'>'", "'&'", "'{'", "'}'", "'interface'", 
		"'['", "']'", "'void'", "'throws'", "'='", "'native'", "'synchronized'", 
		"'transient'", "'volatile'", "'boolean'", "'char'", "'byte'", "'short'", 
		"'int'", "'long'", "'float'", "'double'", "'?'", "'super'", "'('", "')'", 
		"'...'", "'this'", "'null'", "'true'", "'false'", "'@'", "'default'", 
		"':'", "'if'", "'else'", "'for'", "'while'", "'do'", "'try'", "'finally'", 
		"'switch'", "'return'", "'throw'", "'break'", "'continue'", "'catch'", 
		"'case'", "'new'", "'++'", "'--'", "'+'", "'-'", "'~'", "'!'", "'/'", 
		"'%'", "'instanceof'", "'=='", "'!='", "'^'", "'|'", "'&&'", "'||'", "'^='", 
		"'+='", "'-='", "'*='", "'/='", "'&='", "'|='", "'%='", undefined, undefined, 
		undefined, undefined, undefined, undefined, "'enum'", "'assert'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, "HexLiteral", 
		"DecimalLiteral", "OctalLiteral", "FloatingPointLiteral", "CharacterLiteral", 
		"StringLiteral", "ENUM", "ASSERT", "Identifier", "COMMENT", "WS", "LINE_COMMENT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(JavaParser._LITERAL_NAMES, JavaParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return JavaParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Java.g4"; }

	// @Override
	public get ruleNames(): string[] { return JavaParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return JavaParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(JavaParser._ATN, this);
	}
	// @RuleVersion(0)
	public compilationUnit(): CompilationUnitContext {
		let _localctx: CompilationUnitContext = new CompilationUnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, JavaParser.RULE_compilationUnit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 219;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.T__0) {
				{
				this.state = 218;
				this.packageDeclaration();
				}
			}

			this.state = 224;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JavaParser.T__2) {
				{
				{
				this.state = 221;
				this.importDeclaration();
				}
				}
				this.state = 226;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 230;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.T__1) | (1 << JavaParser.T__3) | (1 << JavaParser.T__6) | (1 << JavaParser.T__9) | (1 << JavaParser.T__10) | (1 << JavaParser.T__11) | (1 << JavaParser.T__12) | (1 << JavaParser.T__13) | (1 << JavaParser.T__14) | (1 << JavaParser.T__21))) !== 0) || _la === JavaParser.T__48 || _la === JavaParser.ENUM) {
				{
				{
				this.state = 227;
				this.typeDeclaration();
				}
				}
				this.state = 232;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 233;
			this.match(JavaParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public packageDeclaration(): PackageDeclarationContext {
		let _localctx: PackageDeclarationContext = new PackageDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, JavaParser.RULE_packageDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 235;
			this.match(JavaParser.T__0);
			this.state = 236;
			this.qualifiedName();
			this.state = 237;
			this.match(JavaParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public importDeclaration(): ImportDeclarationContext {
		let _localctx: ImportDeclarationContext = new ImportDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, JavaParser.RULE_importDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 239;
			this.match(JavaParser.T__2);
			this.state = 241;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.T__3) {
				{
				this.state = 240;
				this.match(JavaParser.T__3);
				}
			}

			this.state = 243;
			this.qualifiedName();
			this.state = 246;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.T__4) {
				{
				this.state = 244;
				this.match(JavaParser.T__4);
				this.state = 245;
				this.match(JavaParser.T__5);
				}
			}

			this.state = 248;
			this.match(JavaParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeDeclaration(): TypeDeclarationContext {
		let _localctx: TypeDeclarationContext = new TypeDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, JavaParser.RULE_typeDeclaration);
		try {
			let _alt: number;
			this.state = 262;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.T__3:
			case JavaParser.T__6:
			case JavaParser.T__9:
			case JavaParser.T__10:
			case JavaParser.T__11:
			case JavaParser.T__12:
			case JavaParser.T__13:
			case JavaParser.T__14:
			case JavaParser.T__21:
			case JavaParser.T__48:
			case JavaParser.ENUM:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 253;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 250;
						this.classOrInterfaceModifier();
						}
						}
					}
					this.state = 255;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
				}
				this.state = 259;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case JavaParser.T__6:
					{
					this.state = 256;
					this.classDeclaration();
					}
					break;
				case JavaParser.T__21:
				case JavaParser.T__48:
					{
					this.state = 257;
					this.interfaceDeclaration();
					}
					break;
				case JavaParser.ENUM:
					{
					this.state = 258;
					this.enumDeclaration();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case JavaParser.T__1:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 261;
				this.match(JavaParser.T__1);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classDeclaration(): ClassDeclarationContext {
		let _localctx: ClassDeclarationContext = new ClassDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, JavaParser.RULE_classDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 264;
			this.match(JavaParser.T__6);
			this.state = 265;
			this.match(JavaParser.Identifier);
			this.state = 267;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.T__15) {
				{
				this.state = 266;
				this.typeParameters();
				}
			}

			this.state = 271;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.T__7) {
				{
				this.state = 269;
				this.match(JavaParser.T__7);
				this.state = 270;
				this.type();
				}
			}

			this.state = 275;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.T__8) {
				{
				this.state = 273;
				this.match(JavaParser.T__8);
				this.state = 274;
				this.typeList();
				}
			}

			this.state = 277;
			this.classBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumDeclaration(): EnumDeclarationContext {
		let _localctx: EnumDeclarationContext = new EnumDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, JavaParser.RULE_enumDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 279;
			this.match(JavaParser.ENUM);
			this.state = 280;
			this.match(JavaParser.Identifier);
			this.state = 283;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.T__8) {
				{
				this.state = 281;
				this.match(JavaParser.T__8);
				this.state = 282;
				this.typeList();
				}
			}

			this.state = 285;
			this.enumBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interfaceDeclaration(): InterfaceDeclarationContext {
		let _localctx: InterfaceDeclarationContext = new InterfaceDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, JavaParser.RULE_interfaceDeclaration);
		try {
			this.state = 289;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.T__21:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 287;
				this.normalInterfaceDeclaration();
				}
				break;
			case JavaParser.T__48:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 288;
				this.annotationTypeDeclaration();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classOrInterfaceModifier(): ClassOrInterfaceModifierContext {
		let _localctx: ClassOrInterfaceModifierContext = new ClassOrInterfaceModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, JavaParser.RULE_classOrInterfaceModifier);
		try {
			this.state = 299;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.T__48:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 291;
				this.annotation();
				}
				break;
			case JavaParser.T__9:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 292;
				this.match(JavaParser.T__9);
				}
				break;
			case JavaParser.T__10:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 293;
				this.match(JavaParser.T__10);
				}
				break;
			case JavaParser.T__11:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 294;
				this.match(JavaParser.T__11);
				}
				break;
			case JavaParser.T__12:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 295;
				this.match(JavaParser.T__12);
				}
				break;
			case JavaParser.T__3:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 296;
				this.match(JavaParser.T__3);
				}
				break;
			case JavaParser.T__13:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 297;
				this.match(JavaParser.T__13);
				}
				break;
			case JavaParser.T__14:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 298;
				this.match(JavaParser.T__14);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public modifiers(): ModifiersContext {
		let _localctx: ModifiersContext = new ModifiersContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, JavaParser.RULE_modifiers);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 304;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 301;
					this.modifier();
					}
					}
				}
				this.state = 306;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeParameters(): TypeParametersContext {
		let _localctx: TypeParametersContext = new TypeParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, JavaParser.RULE_typeParameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 307;
			this.match(JavaParser.T__15);
			this.state = 308;
			this.typeParameter();
			this.state = 313;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JavaParser.T__16) {
				{
				{
				this.state = 309;
				this.match(JavaParser.T__16);
				this.state = 310;
				this.typeParameter();
				}
				}
				this.state = 315;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 316;
			this.match(JavaParser.T__17);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeParameter(): TypeParameterContext {
		let _localctx: TypeParameterContext = new TypeParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, JavaParser.RULE_typeParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 318;
			this.match(JavaParser.Identifier);
			this.state = 321;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.T__7) {
				{
				this.state = 319;
				this.match(JavaParser.T__7);
				this.state = 320;
				this.typeBound();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeBound(): TypeBoundContext {
		let _localctx: TypeBoundContext = new TypeBoundContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, JavaParser.RULE_typeBound);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 323;
			this.type();
			this.state = 328;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JavaParser.T__18) {
				{
				{
				this.state = 324;
				this.match(JavaParser.T__18);
				this.state = 325;
				this.type();
				}
				}
				this.state = 330;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumBody(): EnumBodyContext {
		let _localctx: EnumBodyContext = new EnumBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, JavaParser.RULE_enumBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 331;
			this.match(JavaParser.T__19);
			this.state = 333;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.T__48 || _la === JavaParser.Identifier) {
				{
				this.state = 332;
				this.enumConstants();
				}
			}

			this.state = 336;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.T__16) {
				{
				this.state = 335;
				this.match(JavaParser.T__16);
				}
			}

			this.state = 339;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.T__1) {
				{
				this.state = 338;
				this.enumBodyDeclarations();
				}
			}

			this.state = 341;
			this.match(JavaParser.T__20);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumConstants(): EnumConstantsContext {
		let _localctx: EnumConstantsContext = new EnumConstantsContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, JavaParser.RULE_enumConstants);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 343;
			this.enumConstant();
			this.state = 348;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 344;
					this.match(JavaParser.T__16);
					this.state = 345;
					this.enumConstant();
					}
					}
				}
				this.state = 350;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumConstant(): EnumConstantContext {
		let _localctx: EnumConstantContext = new EnumConstantContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, JavaParser.RULE_enumConstant);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 352;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.T__48) {
				{
				this.state = 351;
				this.annotations();
				}
			}

			this.state = 354;
			this.match(JavaParser.Identifier);
			this.state = 356;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.T__41) {
				{
				this.state = 355;
				this.arguments();
				}
			}

			this.state = 359;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.T__19) {
				{
				this.state = 358;
				this.classBody();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumBodyDeclarations(): EnumBodyDeclarationsContext {
		let _localctx: EnumBodyDeclarationsContext = new EnumBodyDeclarationsContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, JavaParser.RULE_enumBodyDeclarations);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 361;
			this.match(JavaParser.T__1);
			this.state = 365;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.T__1) | (1 << JavaParser.T__3) | (1 << JavaParser.T__6) | (1 << JavaParser.T__9) | (1 << JavaParser.T__10) | (1 << JavaParser.T__11) | (1 << JavaParser.T__12) | (1 << JavaParser.T__13) | (1 << JavaParser.T__14) | (1 << JavaParser.T__15) | (1 << JavaParser.T__19) | (1 << JavaParser.T__21) | (1 << JavaParser.T__24) | (1 << JavaParser.T__27) | (1 << JavaParser.T__28) | (1 << JavaParser.T__29) | (1 << JavaParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (JavaParser.T__31 - 32)) | (1 << (JavaParser.T__32 - 32)) | (1 << (JavaParser.T__33 - 32)) | (1 << (JavaParser.T__34 - 32)) | (1 << (JavaParser.T__35 - 32)) | (1 << (JavaParser.T__36 - 32)) | (1 << (JavaParser.T__37 - 32)) | (1 << (JavaParser.T__38 - 32)) | (1 << (JavaParser.T__48 - 32)))) !== 0) || _la === JavaParser.ENUM || _la === JavaParser.Identifier) {
				{
				{
				this.state = 362;
				this.classBodyDeclaration();
				}
				}
				this.state = 367;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public normalInterfaceDeclaration(): NormalInterfaceDeclarationContext {
		let _localctx: NormalInterfaceDeclarationContext = new NormalInterfaceDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, JavaParser.RULE_normalInterfaceDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 368;
			this.match(JavaParser.T__21);
			this.state = 369;
			this.match(JavaParser.Identifier);
			this.state = 371;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.T__15) {
				{
				this.state = 370;
				this.typeParameters();
				}
			}

			this.state = 375;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.T__7) {
				{
				this.state = 373;
				this.match(JavaParser.T__7);
				this.state = 374;
				this.typeList();
				}
			}

			this.state = 377;
			this.interfaceBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeList(): TypeListContext {
		let _localctx: TypeListContext = new TypeListContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, JavaParser.RULE_typeList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 379;
			this.type();
			this.state = 384;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JavaParser.T__16) {
				{
				{
				this.state = 380;
				this.match(JavaParser.T__16);
				this.state = 381;
				this.type();
				}
				}
				this.state = 386;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classBody(): ClassBodyContext {
		let _localctx: ClassBodyContext = new ClassBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, JavaParser.RULE_classBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 387;
			this.match(JavaParser.T__19);
			this.state = 391;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.T__1) | (1 << JavaParser.T__3) | (1 << JavaParser.T__6) | (1 << JavaParser.T__9) | (1 << JavaParser.T__10) | (1 << JavaParser.T__11) | (1 << JavaParser.T__12) | (1 << JavaParser.T__13) | (1 << JavaParser.T__14) | (1 << JavaParser.T__15) | (1 << JavaParser.T__19) | (1 << JavaParser.T__21) | (1 << JavaParser.T__24) | (1 << JavaParser.T__27) | (1 << JavaParser.T__28) | (1 << JavaParser.T__29) | (1 << JavaParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (JavaParser.T__31 - 32)) | (1 << (JavaParser.T__32 - 32)) | (1 << (JavaParser.T__33 - 32)) | (1 << (JavaParser.T__34 - 32)) | (1 << (JavaParser.T__35 - 32)) | (1 << (JavaParser.T__36 - 32)) | (1 << (JavaParser.T__37 - 32)) | (1 << (JavaParser.T__38 - 32)) | (1 << (JavaParser.T__48 - 32)))) !== 0) || _la === JavaParser.ENUM || _la === JavaParser.Identifier) {
				{
				{
				this.state = 388;
				this.classBodyDeclaration();
				}
				}
				this.state = 393;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 394;
			this.match(JavaParser.T__20);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interfaceBody(): InterfaceBodyContext {
		let _localctx: InterfaceBodyContext = new InterfaceBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, JavaParser.RULE_interfaceBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 396;
			this.match(JavaParser.T__19);
			this.state = 400;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.T__1) | (1 << JavaParser.T__3) | (1 << JavaParser.T__6) | (1 << JavaParser.T__9) | (1 << JavaParser.T__10) | (1 << JavaParser.T__11) | (1 << JavaParser.T__12) | (1 << JavaParser.T__13) | (1 << JavaParser.T__14) | (1 << JavaParser.T__15) | (1 << JavaParser.T__21) | (1 << JavaParser.T__24) | (1 << JavaParser.T__27) | (1 << JavaParser.T__28) | (1 << JavaParser.T__29) | (1 << JavaParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (JavaParser.T__31 - 32)) | (1 << (JavaParser.T__32 - 32)) | (1 << (JavaParser.T__33 - 32)) | (1 << (JavaParser.T__34 - 32)) | (1 << (JavaParser.T__35 - 32)) | (1 << (JavaParser.T__36 - 32)) | (1 << (JavaParser.T__37 - 32)) | (1 << (JavaParser.T__38 - 32)) | (1 << (JavaParser.T__48 - 32)))) !== 0) || _la === JavaParser.ENUM || _la === JavaParser.Identifier) {
				{
				{
				this.state = 397;
				this.interfaceBodyDeclaration();
				}
				}
				this.state = 402;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 403;
			this.match(JavaParser.T__20);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classBodyDeclaration(): ClassBodyDeclarationContext {
		let _localctx: ClassBodyDeclarationContext = new ClassBodyDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, JavaParser.RULE_classBodyDeclaration);
		let _la: number;
		try {
			this.state = 413;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 32, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 405;
				this.match(JavaParser.T__1);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 407;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JavaParser.T__3) {
					{
					this.state = 406;
					this.match(JavaParser.T__3);
					}
				}

				this.state = 409;
				this.block();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 410;
				this.modifiers();
				this.state = 411;
				this.member();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public member(): MemberContext {
		let _localctx: MemberContext = new MemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, JavaParser.RULE_member);
		try {
			this.state = 421;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 33, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 415;
				this.genericMethodDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 416;
				this.methodDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 417;
				this.fieldDeclaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 418;
				this.constructorDeclaration();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 419;
				this.interfaceDeclaration();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 420;
				this.classDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public methodDeclaration(): MethodDeclarationContext {
		let _localctx: MethodDeclarationContext = new MethodDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, JavaParser.RULE_methodDeclaration);
		let _la: number;
		try {
			this.state = 440;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.T__31:
			case JavaParser.T__32:
			case JavaParser.T__33:
			case JavaParser.T__34:
			case JavaParser.T__35:
			case JavaParser.T__36:
			case JavaParser.T__37:
			case JavaParser.T__38:
			case JavaParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 423;
				this.type();
				this.state = 424;
				this.match(JavaParser.Identifier);
				this.state = 425;
				this.formalParameters();
				this.state = 430;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JavaParser.T__22) {
					{
					{
					this.state = 426;
					this.match(JavaParser.T__22);
					this.state = 427;
					this.match(JavaParser.T__23);
					}
					}
					this.state = 432;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 433;
				this.methodDeclarationRest();
				}
				break;
			case JavaParser.T__24:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 435;
				this.match(JavaParser.T__24);
				this.state = 436;
				this.match(JavaParser.Identifier);
				this.state = 437;
				this.formalParameters();
				this.state = 438;
				this.methodDeclarationRest();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public methodDeclarationRest(): MethodDeclarationRestContext {
		let _localctx: MethodDeclarationRestContext = new MethodDeclarationRestContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, JavaParser.RULE_methodDeclarationRest);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 444;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.T__25) {
				{
				this.state = 442;
				this.match(JavaParser.T__25);
				this.state = 443;
				this.qualifiedNameList();
				}
			}

			this.state = 448;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.T__19:
				{
				this.state = 446;
				this.methodBody();
				}
				break;
			case JavaParser.T__1:
				{
				this.state = 447;
				this.match(JavaParser.T__1);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public genericMethodDeclaration(): GenericMethodDeclarationContext {
		let _localctx: GenericMethodDeclarationContext = new GenericMethodDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, JavaParser.RULE_genericMethodDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 450;
			this.typeParameters();
			this.state = 451;
			this.methodDeclaration();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldDeclaration(): FieldDeclarationContext {
		let _localctx: FieldDeclarationContext = new FieldDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, JavaParser.RULE_fieldDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 453;
			this.type();
			this.state = 454;
			this.variableDeclarators();
			this.state = 455;
			this.match(JavaParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constructorDeclaration(): ConstructorDeclarationContext {
		let _localctx: ConstructorDeclarationContext = new ConstructorDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, JavaParser.RULE_constructorDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 458;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.T__15) {
				{
				this.state = 457;
				this.typeParameters();
				}
			}

			this.state = 460;
			this.match(JavaParser.Identifier);
			this.state = 461;
			this.formalParameters();
			this.state = 464;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.T__25) {
				{
				this.state = 462;
				this.match(JavaParser.T__25);
				this.state = 463;
				this.qualifiedNameList();
				}
			}

			this.state = 466;
			this.constructorBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interfaceBodyDeclaration(): InterfaceBodyDeclarationContext {
		let _localctx: InterfaceBodyDeclarationContext = new InterfaceBodyDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, JavaParser.RULE_interfaceBodyDeclaration);
		try {
			this.state = 472;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.T__3:
			case JavaParser.T__6:
			case JavaParser.T__9:
			case JavaParser.T__10:
			case JavaParser.T__11:
			case JavaParser.T__12:
			case JavaParser.T__13:
			case JavaParser.T__14:
			case JavaParser.T__15:
			case JavaParser.T__21:
			case JavaParser.T__24:
			case JavaParser.T__27:
			case JavaParser.T__28:
			case JavaParser.T__29:
			case JavaParser.T__30:
			case JavaParser.T__31:
			case JavaParser.T__32:
			case JavaParser.T__33:
			case JavaParser.T__34:
			case JavaParser.T__35:
			case JavaParser.T__36:
			case JavaParser.T__37:
			case JavaParser.T__38:
			case JavaParser.T__48:
			case JavaParser.ENUM:
			case JavaParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 468;
				this.modifiers();
				this.state = 469;
				this.interfaceMemberDecl();
				}
				break;
			case JavaParser.T__1:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 471;
				this.match(JavaParser.T__1);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interfaceMemberDecl(): InterfaceMemberDeclContext {
		let _localctx: InterfaceMemberDeclContext = new InterfaceMemberDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, JavaParser.RULE_interfaceMemberDecl);
		try {
			this.state = 481;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.T__31:
			case JavaParser.T__32:
			case JavaParser.T__33:
			case JavaParser.T__34:
			case JavaParser.T__35:
			case JavaParser.T__36:
			case JavaParser.T__37:
			case JavaParser.T__38:
			case JavaParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 474;
				this.interfaceMethodOrFieldDecl();
				}
				break;
			case JavaParser.T__15:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 475;
				this.interfaceGenericMethodDecl();
				}
				break;
			case JavaParser.T__24:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 476;
				this.match(JavaParser.T__24);
				this.state = 477;
				this.match(JavaParser.Identifier);
				this.state = 478;
				this.voidInterfaceMethodDeclaratorRest();
				}
				break;
			case JavaParser.T__21:
			case JavaParser.T__48:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 479;
				this.interfaceDeclaration();
				}
				break;
			case JavaParser.T__6:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 480;
				this.classDeclaration();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interfaceMethodOrFieldDecl(): InterfaceMethodOrFieldDeclContext {
		let _localctx: InterfaceMethodOrFieldDeclContext = new InterfaceMethodOrFieldDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, JavaParser.RULE_interfaceMethodOrFieldDecl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 483;
			this.type();
			this.state = 484;
			this.match(JavaParser.Identifier);
			this.state = 485;
			this.interfaceMethodOrFieldRest();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interfaceMethodOrFieldRest(): InterfaceMethodOrFieldRestContext {
		let _localctx: InterfaceMethodOrFieldRestContext = new InterfaceMethodOrFieldRestContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, JavaParser.RULE_interfaceMethodOrFieldRest);
		try {
			this.state = 491;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.T__22:
			case JavaParser.T__26:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 487;
				this.constantDeclaratorsRest();
				this.state = 488;
				this.match(JavaParser.T__1);
				}
				break;
			case JavaParser.T__41:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 490;
				this.interfaceMethodDeclaratorRest();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public voidMethodDeclaratorRest(): VoidMethodDeclaratorRestContext {
		let _localctx: VoidMethodDeclaratorRestContext = new VoidMethodDeclaratorRestContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, JavaParser.RULE_voidMethodDeclaratorRest);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 493;
			this.formalParameters();
			this.state = 496;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.T__25) {
				{
				this.state = 494;
				this.match(JavaParser.T__25);
				this.state = 495;
				this.qualifiedNameList();
				}
			}

			this.state = 500;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.T__19:
				{
				this.state = 498;
				this.methodBody();
				}
				break;
			case JavaParser.T__1:
				{
				this.state = 499;
				this.match(JavaParser.T__1);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interfaceMethodDeclaratorRest(): InterfaceMethodDeclaratorRestContext {
		let _localctx: InterfaceMethodDeclaratorRestContext = new InterfaceMethodDeclaratorRestContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, JavaParser.RULE_interfaceMethodDeclaratorRest);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 502;
			this.formalParameters();
			this.state = 507;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JavaParser.T__22) {
				{
				{
				this.state = 503;
				this.match(JavaParser.T__22);
				this.state = 504;
				this.match(JavaParser.T__23);
				}
				}
				this.state = 509;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 512;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.T__25) {
				{
				this.state = 510;
				this.match(JavaParser.T__25);
				this.state = 511;
				this.qualifiedNameList();
				}
			}

			this.state = 514;
			this.match(JavaParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interfaceGenericMethodDecl(): InterfaceGenericMethodDeclContext {
		let _localctx: InterfaceGenericMethodDeclContext = new InterfaceGenericMethodDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, JavaParser.RULE_interfaceGenericMethodDecl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 516;
			this.typeParameters();
			this.state = 519;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.T__31:
			case JavaParser.T__32:
			case JavaParser.T__33:
			case JavaParser.T__34:
			case JavaParser.T__35:
			case JavaParser.T__36:
			case JavaParser.T__37:
			case JavaParser.T__38:
			case JavaParser.Identifier:
				{
				this.state = 517;
				this.type();
				}
				break;
			case JavaParser.T__24:
				{
				this.state = 518;
				this.match(JavaParser.T__24);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 521;
			this.match(JavaParser.Identifier);
			this.state = 522;
			this.interfaceMethodDeclaratorRest();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public voidInterfaceMethodDeclaratorRest(): VoidInterfaceMethodDeclaratorRestContext {
		let _localctx: VoidInterfaceMethodDeclaratorRestContext = new VoidInterfaceMethodDeclaratorRestContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, JavaParser.RULE_voidInterfaceMethodDeclaratorRest);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 524;
			this.formalParameters();
			this.state = 527;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.T__25) {
				{
				this.state = 525;
				this.match(JavaParser.T__25);
				this.state = 526;
				this.qualifiedNameList();
				}
			}

			this.state = 529;
			this.match(JavaParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constantDeclarator(): ConstantDeclaratorContext {
		let _localctx: ConstantDeclaratorContext = new ConstantDeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, JavaParser.RULE_constantDeclarator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 531;
			this.match(JavaParser.Identifier);
			this.state = 532;
			this.constantDeclaratorRest();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableDeclarators(): VariableDeclaratorsContext {
		let _localctx: VariableDeclaratorsContext = new VariableDeclaratorsContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, JavaParser.RULE_variableDeclarators);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 534;
			this.variableDeclarator();
			this.state = 539;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JavaParser.T__16) {
				{
				{
				this.state = 535;
				this.match(JavaParser.T__16);
				this.state = 536;
				this.variableDeclarator();
				}
				}
				this.state = 541;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableDeclarator(): VariableDeclaratorContext {
		let _localctx: VariableDeclaratorContext = new VariableDeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, JavaParser.RULE_variableDeclarator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 542;
			this.variableDeclaratorId();
			this.state = 545;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.T__26) {
				{
				this.state = 543;
				this.match(JavaParser.T__26);
				this.state = 544;
				this.variableInitializer();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constantDeclaratorsRest(): ConstantDeclaratorsRestContext {
		let _localctx: ConstantDeclaratorsRestContext = new ConstantDeclaratorsRestContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, JavaParser.RULE_constantDeclaratorsRest);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 547;
			this.constantDeclaratorRest();
			this.state = 552;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JavaParser.T__16) {
				{
				{
				this.state = 548;
				this.match(JavaParser.T__16);
				this.state = 549;
				this.constantDeclarator();
				}
				}
				this.state = 554;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constantDeclaratorRest(): ConstantDeclaratorRestContext {
		let _localctx: ConstantDeclaratorRestContext = new ConstantDeclaratorRestContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, JavaParser.RULE_constantDeclaratorRest);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 559;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JavaParser.T__22) {
				{
				{
				this.state = 555;
				this.match(JavaParser.T__22);
				this.state = 556;
				this.match(JavaParser.T__23);
				}
				}
				this.state = 561;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 562;
			this.match(JavaParser.T__26);
			this.state = 563;
			this.variableInitializer();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		let _localctx: VariableDeclaratorIdContext = new VariableDeclaratorIdContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, JavaParser.RULE_variableDeclaratorId);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 565;
			this.match(JavaParser.Identifier);
			this.state = 570;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JavaParser.T__22) {
				{
				{
				this.state = 566;
				this.match(JavaParser.T__22);
				this.state = 567;
				this.match(JavaParser.T__23);
				}
				}
				this.state = 572;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableInitializer(): VariableInitializerContext {
		let _localctx: VariableInitializerContext = new VariableInitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, JavaParser.RULE_variableInitializer);
		try {
			this.state = 575;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.T__19:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 573;
				this.arrayInitializer();
				}
				break;
			case JavaParser.T__24:
			case JavaParser.T__31:
			case JavaParser.T__32:
			case JavaParser.T__33:
			case JavaParser.T__34:
			case JavaParser.T__35:
			case JavaParser.T__36:
			case JavaParser.T__37:
			case JavaParser.T__38:
			case JavaParser.T__40:
			case JavaParser.T__41:
			case JavaParser.T__44:
			case JavaParser.T__45:
			case JavaParser.T__46:
			case JavaParser.T__47:
			case JavaParser.T__65:
			case JavaParser.T__66:
			case JavaParser.T__67:
			case JavaParser.T__68:
			case JavaParser.T__69:
			case JavaParser.T__70:
			case JavaParser.T__71:
			case JavaParser.HexLiteral:
			case JavaParser.DecimalLiteral:
			case JavaParser.OctalLiteral:
			case JavaParser.FloatingPointLiteral:
			case JavaParser.CharacterLiteral:
			case JavaParser.StringLiteral:
			case JavaParser.Identifier:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 574;
				this.expression(0);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayInitializer(): ArrayInitializerContext {
		let _localctx: ArrayInitializerContext = new ArrayInitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, JavaParser.RULE_arrayInitializer);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 577;
			this.match(JavaParser.T__19);
			this.state = 589;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 20)) & ~0x1F) === 0 && ((1 << (_la - 20)) & ((1 << (JavaParser.T__19 - 20)) | (1 << (JavaParser.T__24 - 20)) | (1 << (JavaParser.T__31 - 20)) | (1 << (JavaParser.T__32 - 20)) | (1 << (JavaParser.T__33 - 20)) | (1 << (JavaParser.T__34 - 20)) | (1 << (JavaParser.T__35 - 20)) | (1 << (JavaParser.T__36 - 20)) | (1 << (JavaParser.T__37 - 20)) | (1 << (JavaParser.T__38 - 20)) | (1 << (JavaParser.T__40 - 20)) | (1 << (JavaParser.T__41 - 20)) | (1 << (JavaParser.T__44 - 20)) | (1 << (JavaParser.T__45 - 20)) | (1 << (JavaParser.T__46 - 20)) | (1 << (JavaParser.T__47 - 20)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (JavaParser.T__65 - 66)) | (1 << (JavaParser.T__66 - 66)) | (1 << (JavaParser.T__67 - 66)) | (1 << (JavaParser.T__68 - 66)) | (1 << (JavaParser.T__69 - 66)) | (1 << (JavaParser.T__70 - 66)) | (1 << (JavaParser.T__71 - 66)) | (1 << (JavaParser.HexLiteral - 66)) | (1 << (JavaParser.DecimalLiteral - 66)) | (1 << (JavaParser.OctalLiteral - 66)) | (1 << (JavaParser.FloatingPointLiteral - 66)) | (1 << (JavaParser.CharacterLiteral - 66)) | (1 << (JavaParser.StringLiteral - 66)))) !== 0) || _la === JavaParser.Identifier) {
				{
				this.state = 578;
				this.variableInitializer();
				this.state = 583;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 55, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 579;
						this.match(JavaParser.T__16);
						this.state = 580;
						this.variableInitializer();
						}
						}
					}
					this.state = 585;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 55, this._ctx);
				}
				this.state = 587;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JavaParser.T__16) {
					{
					this.state = 586;
					this.match(JavaParser.T__16);
					}
				}

				}
			}

			this.state = 591;
			this.match(JavaParser.T__20);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public modifier(): ModifierContext {
		let _localctx: ModifierContext = new ModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, JavaParser.RULE_modifier);
		try {
			this.state = 605;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.T__48:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 593;
				this.annotation();
				}
				break;
			case JavaParser.T__9:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 594;
				this.match(JavaParser.T__9);
				}
				break;
			case JavaParser.T__10:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 595;
				this.match(JavaParser.T__10);
				}
				break;
			case JavaParser.T__11:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 596;
				this.match(JavaParser.T__11);
				}
				break;
			case JavaParser.T__3:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 597;
				this.match(JavaParser.T__3);
				}
				break;
			case JavaParser.T__12:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 598;
				this.match(JavaParser.T__12);
				}
				break;
			case JavaParser.T__13:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 599;
				this.match(JavaParser.T__13);
				}
				break;
			case JavaParser.T__27:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 600;
				this.match(JavaParser.T__27);
				}
				break;
			case JavaParser.T__28:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 601;
				this.match(JavaParser.T__28);
				}
				break;
			case JavaParser.T__29:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 602;
				this.match(JavaParser.T__29);
				}
				break;
			case JavaParser.T__30:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 603;
				this.match(JavaParser.T__30);
				}
				break;
			case JavaParser.T__14:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 604;
				this.match(JavaParser.T__14);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public packageOrTypeName(): PackageOrTypeNameContext {
		let _localctx: PackageOrTypeNameContext = new PackageOrTypeNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, JavaParser.RULE_packageOrTypeName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 607;
			this.qualifiedName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumConstantName(): EnumConstantNameContext {
		let _localctx: EnumConstantNameContext = new EnumConstantNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, JavaParser.RULE_enumConstantName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 609;
			this.match(JavaParser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeName(): TypeNameContext {
		let _localctx: TypeNameContext = new TypeNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, JavaParser.RULE_typeName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 611;
			this.qualifiedName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public type(): TypeContext {
		let _localctx: TypeContext = new TypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, JavaParser.RULE_type);
		try {
			let _alt: number;
			this.state = 629;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 613;
				this.classOrInterfaceType();
				this.state = 618;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 59, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 614;
						this.match(JavaParser.T__22);
						this.state = 615;
						this.match(JavaParser.T__23);
						}
						}
					}
					this.state = 620;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 59, this._ctx);
				}
				}
				break;
			case JavaParser.T__31:
			case JavaParser.T__32:
			case JavaParser.T__33:
			case JavaParser.T__34:
			case JavaParser.T__35:
			case JavaParser.T__36:
			case JavaParser.T__37:
			case JavaParser.T__38:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 621;
				this.primitiveType();
				this.state = 626;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 60, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 622;
						this.match(JavaParser.T__22);
						this.state = 623;
						this.match(JavaParser.T__23);
						}
						}
					}
					this.state = 628;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 60, this._ctx);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classOrInterfaceType(): ClassOrInterfaceTypeContext {
		let _localctx: ClassOrInterfaceTypeContext = new ClassOrInterfaceTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, JavaParser.RULE_classOrInterfaceType);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 631;
			this.match(JavaParser.Identifier);
			this.state = 633;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 62, this._ctx) ) {
			case 1:
				{
				this.state = 632;
				this.typeArguments();
				}
				break;
			}
			this.state = 642;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 64, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 635;
					this.match(JavaParser.T__4);
					this.state = 636;
					this.match(JavaParser.Identifier);
					this.state = 638;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 63, this._ctx) ) {
					case 1:
						{
						this.state = 637;
						this.typeArguments();
						}
						break;
					}
					}
					}
				}
				this.state = 644;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 64, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primitiveType(): PrimitiveTypeContext {
		let _localctx: PrimitiveTypeContext = new PrimitiveTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, JavaParser.RULE_primitiveType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 645;
			_la = this._input.LA(1);
			if (!(((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (JavaParser.T__31 - 32)) | (1 << (JavaParser.T__32 - 32)) | (1 << (JavaParser.T__33 - 32)) | (1 << (JavaParser.T__34 - 32)) | (1 << (JavaParser.T__35 - 32)) | (1 << (JavaParser.T__36 - 32)) | (1 << (JavaParser.T__37 - 32)) | (1 << (JavaParser.T__38 - 32)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableModifier(): VariableModifierContext {
		let _localctx: VariableModifierContext = new VariableModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, JavaParser.RULE_variableModifier);
		try {
			this.state = 649;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.T__13:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 647;
				this.match(JavaParser.T__13);
				}
				break;
			case JavaParser.T__48:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 648;
				this.annotation();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeArguments(): TypeArgumentsContext {
		let _localctx: TypeArgumentsContext = new TypeArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, JavaParser.RULE_typeArguments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 651;
			this.match(JavaParser.T__15);
			this.state = 652;
			this.typeArgument();
			this.state = 657;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JavaParser.T__16) {
				{
				{
				this.state = 653;
				this.match(JavaParser.T__16);
				this.state = 654;
				this.typeArgument();
				}
				}
				this.state = 659;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 660;
			this.match(JavaParser.T__17);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeArgument(): TypeArgumentContext {
		let _localctx: TypeArgumentContext = new TypeArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, JavaParser.RULE_typeArgument);
		let _la: number;
		try {
			this.state = 668;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.T__31:
			case JavaParser.T__32:
			case JavaParser.T__33:
			case JavaParser.T__34:
			case JavaParser.T__35:
			case JavaParser.T__36:
			case JavaParser.T__37:
			case JavaParser.T__38:
			case JavaParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 662;
				this.type();
				}
				break;
			case JavaParser.T__39:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 663;
				this.match(JavaParser.T__39);
				this.state = 666;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JavaParser.T__7 || _la === JavaParser.T__40) {
					{
					this.state = 664;
					_la = this._input.LA(1);
					if (!(_la === JavaParser.T__7 || _la === JavaParser.T__40)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 665;
					this.type();
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public qualifiedNameList(): QualifiedNameListContext {
		let _localctx: QualifiedNameListContext = new QualifiedNameListContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, JavaParser.RULE_qualifiedNameList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 670;
			this.qualifiedName();
			this.state = 675;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JavaParser.T__16) {
				{
				{
				this.state = 671;
				this.match(JavaParser.T__16);
				this.state = 672;
				this.qualifiedName();
				}
				}
				this.state = 677;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public formalParameters(): FormalParametersContext {
		let _localctx: FormalParametersContext = new FormalParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, JavaParser.RULE_formalParameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 678;
			this.match(JavaParser.T__41);
			this.state = 680;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.T__13 || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (JavaParser.T__31 - 32)) | (1 << (JavaParser.T__32 - 32)) | (1 << (JavaParser.T__33 - 32)) | (1 << (JavaParser.T__34 - 32)) | (1 << (JavaParser.T__35 - 32)) | (1 << (JavaParser.T__36 - 32)) | (1 << (JavaParser.T__37 - 32)) | (1 << (JavaParser.T__38 - 32)) | (1 << (JavaParser.T__48 - 32)))) !== 0) || _la === JavaParser.Identifier) {
				{
				this.state = 679;
				this.formalParameterDecls();
				}
			}

			this.state = 682;
			this.match(JavaParser.T__42);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public formalParameterDecls(): FormalParameterDeclsContext {
		let _localctx: FormalParameterDeclsContext = new FormalParameterDeclsContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, JavaParser.RULE_formalParameterDecls);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 684;
			this.variableModifiers();
			this.state = 685;
			this.type();
			this.state = 686;
			this.formalParameterDeclsRest();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public formalParameterDeclsRest(): FormalParameterDeclsRestContext {
		let _localctx: FormalParameterDeclsRestContext = new FormalParameterDeclsRestContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, JavaParser.RULE_formalParameterDeclsRest);
		let _la: number;
		try {
			this.state = 695;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 688;
				this.variableDeclaratorId();
				this.state = 691;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JavaParser.T__16) {
					{
					this.state = 689;
					this.match(JavaParser.T__16);
					this.state = 690;
					this.formalParameterDecls();
					}
				}

				}
				break;
			case JavaParser.T__43:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 693;
				this.match(JavaParser.T__43);
				this.state = 694;
				this.variableDeclaratorId();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public methodBody(): MethodBodyContext {
		let _localctx: MethodBodyContext = new MethodBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, JavaParser.RULE_methodBody);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 697;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constructorBody(): ConstructorBodyContext {
		let _localctx: ConstructorBodyContext = new ConstructorBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, JavaParser.RULE_constructorBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 699;
			this.match(JavaParser.T__19);
			this.state = 701;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 73, this._ctx) ) {
			case 1:
				{
				this.state = 700;
				this.explicitConstructorInvocation();
				}
				break;
			}
			this.state = 706;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.T__1) | (1 << JavaParser.T__6) | (1 << JavaParser.T__13) | (1 << JavaParser.T__19) | (1 << JavaParser.T__21) | (1 << JavaParser.T__24) | (1 << JavaParser.T__28))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (JavaParser.T__31 - 32)) | (1 << (JavaParser.T__32 - 32)) | (1 << (JavaParser.T__33 - 32)) | (1 << (JavaParser.T__34 - 32)) | (1 << (JavaParser.T__35 - 32)) | (1 << (JavaParser.T__36 - 32)) | (1 << (JavaParser.T__37 - 32)) | (1 << (JavaParser.T__38 - 32)) | (1 << (JavaParser.T__40 - 32)) | (1 << (JavaParser.T__41 - 32)) | (1 << (JavaParser.T__44 - 32)) | (1 << (JavaParser.T__45 - 32)) | (1 << (JavaParser.T__46 - 32)) | (1 << (JavaParser.T__47 - 32)) | (1 << (JavaParser.T__48 - 32)) | (1 << (JavaParser.T__51 - 32)) | (1 << (JavaParser.T__53 - 32)) | (1 << (JavaParser.T__54 - 32)) | (1 << (JavaParser.T__55 - 32)) | (1 << (JavaParser.T__56 - 32)) | (1 << (JavaParser.T__58 - 32)) | (1 << (JavaParser.T__59 - 32)) | (1 << (JavaParser.T__60 - 32)) | (1 << (JavaParser.T__61 - 32)) | (1 << (JavaParser.T__62 - 32)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (JavaParser.T__65 - 66)) | (1 << (JavaParser.T__66 - 66)) | (1 << (JavaParser.T__67 - 66)) | (1 << (JavaParser.T__68 - 66)) | (1 << (JavaParser.T__69 - 66)) | (1 << (JavaParser.T__70 - 66)) | (1 << (JavaParser.T__71 - 66)) | (1 << (JavaParser.HexLiteral - 66)) | (1 << (JavaParser.DecimalLiteral - 66)) | (1 << (JavaParser.OctalLiteral - 66)) | (1 << (JavaParser.FloatingPointLiteral - 66)) | (1 << (JavaParser.CharacterLiteral - 66)) | (1 << (JavaParser.StringLiteral - 66)) | (1 << (JavaParser.ASSERT - 66)))) !== 0) || _la === JavaParser.Identifier) {
				{
				{
				this.state = 703;
				this.blockStatement();
				}
				}
				this.state = 708;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 709;
			this.match(JavaParser.T__20);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public explicitConstructorInvocation(): ExplicitConstructorInvocationContext {
		let _localctx: ExplicitConstructorInvocationContext = new ExplicitConstructorInvocationContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, JavaParser.RULE_explicitConstructorInvocation);
		let _la: number;
		try {
			this.state = 727;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 77, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 712;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JavaParser.T__15) {
					{
					this.state = 711;
					this.nonWildcardTypeArguments();
					}
				}

				this.state = 714;
				_la = this._input.LA(1);
				if (!(_la === JavaParser.T__40 || _la === JavaParser.T__44)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 715;
				this.arguments();
				this.state = 716;
				this.match(JavaParser.T__1);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 718;
				this.primary();
				this.state = 719;
				this.match(JavaParser.T__4);
				this.state = 721;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JavaParser.T__15) {
					{
					this.state = 720;
					this.nonWildcardTypeArguments();
					}
				}

				this.state = 723;
				this.match(JavaParser.T__40);
				this.state = 724;
				this.arguments();
				this.state = 725;
				this.match(JavaParser.T__1);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public qualifiedName(): QualifiedNameContext {
		let _localctx: QualifiedNameContext = new QualifiedNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, JavaParser.RULE_qualifiedName);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 729;
			this.match(JavaParser.Identifier);
			this.state = 734;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 78, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 730;
					this.match(JavaParser.T__4);
					this.state = 731;
					this.match(JavaParser.Identifier);
					}
					}
				}
				this.state = 736;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 78, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, JavaParser.RULE_literal);
		try {
			this.state = 743;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.HexLiteral:
			case JavaParser.DecimalLiteral:
			case JavaParser.OctalLiteral:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 737;
				this.integerLiteral();
				}
				break;
			case JavaParser.FloatingPointLiteral:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 738;
				this.match(JavaParser.FloatingPointLiteral);
				}
				break;
			case JavaParser.CharacterLiteral:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 739;
				this.match(JavaParser.CharacterLiteral);
				}
				break;
			case JavaParser.StringLiteral:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 740;
				this.match(JavaParser.StringLiteral);
				}
				break;
			case JavaParser.T__46:
			case JavaParser.T__47:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 741;
				this.booleanLiteral();
				}
				break;
			case JavaParser.T__45:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 742;
				this.match(JavaParser.T__45);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public integerLiteral(): IntegerLiteralContext {
		let _localctx: IntegerLiteralContext = new IntegerLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, JavaParser.RULE_integerLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 745;
			_la = this._input.LA(1);
			if (!(((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & ((1 << (JavaParser.HexLiteral - 90)) | (1 << (JavaParser.DecimalLiteral - 90)) | (1 << (JavaParser.OctalLiteral - 90)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public booleanLiteral(): BooleanLiteralContext {
		let _localctx: BooleanLiteralContext = new BooleanLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, JavaParser.RULE_booleanLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 747;
			_la = this._input.LA(1);
			if (!(_la === JavaParser.T__46 || _la === JavaParser.T__47)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotations(): AnnotationsContext {
		let _localctx: AnnotationsContext = new AnnotationsContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, JavaParser.RULE_annotations);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 750;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 749;
				this.annotation();
				}
				}
				this.state = 752;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === JavaParser.T__48);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotation(): AnnotationContext {
		let _localctx: AnnotationContext = new AnnotationContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, JavaParser.RULE_annotation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 754;
			this.match(JavaParser.T__48);
			this.state = 755;
			this.annotationName();
			this.state = 762;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.T__41) {
				{
				this.state = 756;
				this.match(JavaParser.T__41);
				this.state = 759;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 81, this._ctx) ) {
				case 1:
					{
					this.state = 757;
					this.elementValuePairs();
					}
					break;

				case 2:
					{
					this.state = 758;
					this.elementValue();
					}
					break;
				}
				this.state = 761;
				this.match(JavaParser.T__42);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotationName(): AnnotationNameContext {
		let _localctx: AnnotationNameContext = new AnnotationNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, JavaParser.RULE_annotationName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 764;
			this.match(JavaParser.Identifier);
			this.state = 769;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JavaParser.T__4) {
				{
				{
				this.state = 765;
				this.match(JavaParser.T__4);
				this.state = 766;
				this.match(JavaParser.Identifier);
				}
				}
				this.state = 771;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elementValuePairs(): ElementValuePairsContext {
		let _localctx: ElementValuePairsContext = new ElementValuePairsContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, JavaParser.RULE_elementValuePairs);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 772;
			this.elementValuePair();
			this.state = 777;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JavaParser.T__16) {
				{
				{
				this.state = 773;
				this.match(JavaParser.T__16);
				this.state = 774;
				this.elementValuePair();
				}
				}
				this.state = 779;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elementValuePair(): ElementValuePairContext {
		let _localctx: ElementValuePairContext = new ElementValuePairContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, JavaParser.RULE_elementValuePair);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 780;
			this.match(JavaParser.Identifier);
			this.state = 781;
			this.match(JavaParser.T__26);
			this.state = 782;
			this.elementValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elementValue(): ElementValueContext {
		let _localctx: ElementValueContext = new ElementValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, JavaParser.RULE_elementValue);
		try {
			this.state = 787;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.T__24:
			case JavaParser.T__31:
			case JavaParser.T__32:
			case JavaParser.T__33:
			case JavaParser.T__34:
			case JavaParser.T__35:
			case JavaParser.T__36:
			case JavaParser.T__37:
			case JavaParser.T__38:
			case JavaParser.T__40:
			case JavaParser.T__41:
			case JavaParser.T__44:
			case JavaParser.T__45:
			case JavaParser.T__46:
			case JavaParser.T__47:
			case JavaParser.T__65:
			case JavaParser.T__66:
			case JavaParser.T__67:
			case JavaParser.T__68:
			case JavaParser.T__69:
			case JavaParser.T__70:
			case JavaParser.T__71:
			case JavaParser.HexLiteral:
			case JavaParser.DecimalLiteral:
			case JavaParser.OctalLiteral:
			case JavaParser.FloatingPointLiteral:
			case JavaParser.CharacterLiteral:
			case JavaParser.StringLiteral:
			case JavaParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 784;
				this.expression(0);
				}
				break;
			case JavaParser.T__48:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 785;
				this.annotation();
				}
				break;
			case JavaParser.T__19:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 786;
				this.elementValueArrayInitializer();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elementValueArrayInitializer(): ElementValueArrayInitializerContext {
		let _localctx: ElementValueArrayInitializerContext = new ElementValueArrayInitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, JavaParser.RULE_elementValueArrayInitializer);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 789;
			this.match(JavaParser.T__19);
			this.state = 798;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 20)) & ~0x1F) === 0 && ((1 << (_la - 20)) & ((1 << (JavaParser.T__19 - 20)) | (1 << (JavaParser.T__24 - 20)) | (1 << (JavaParser.T__31 - 20)) | (1 << (JavaParser.T__32 - 20)) | (1 << (JavaParser.T__33 - 20)) | (1 << (JavaParser.T__34 - 20)) | (1 << (JavaParser.T__35 - 20)) | (1 << (JavaParser.T__36 - 20)) | (1 << (JavaParser.T__37 - 20)) | (1 << (JavaParser.T__38 - 20)) | (1 << (JavaParser.T__40 - 20)) | (1 << (JavaParser.T__41 - 20)) | (1 << (JavaParser.T__44 - 20)) | (1 << (JavaParser.T__45 - 20)) | (1 << (JavaParser.T__46 - 20)) | (1 << (JavaParser.T__47 - 20)) | (1 << (JavaParser.T__48 - 20)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (JavaParser.T__65 - 66)) | (1 << (JavaParser.T__66 - 66)) | (1 << (JavaParser.T__67 - 66)) | (1 << (JavaParser.T__68 - 66)) | (1 << (JavaParser.T__69 - 66)) | (1 << (JavaParser.T__70 - 66)) | (1 << (JavaParser.T__71 - 66)) | (1 << (JavaParser.HexLiteral - 66)) | (1 << (JavaParser.DecimalLiteral - 66)) | (1 << (JavaParser.OctalLiteral - 66)) | (1 << (JavaParser.FloatingPointLiteral - 66)) | (1 << (JavaParser.CharacterLiteral - 66)) | (1 << (JavaParser.StringLiteral - 66)))) !== 0) || _la === JavaParser.Identifier) {
				{
				this.state = 790;
				this.elementValue();
				this.state = 795;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 86, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 791;
						this.match(JavaParser.T__16);
						this.state = 792;
						this.elementValue();
						}
						}
					}
					this.state = 797;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 86, this._ctx);
				}
				}
			}

			this.state = 801;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.T__16) {
				{
				this.state = 800;
				this.match(JavaParser.T__16);
				}
			}

			this.state = 803;
			this.match(JavaParser.T__20);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotationTypeDeclaration(): AnnotationTypeDeclarationContext {
		let _localctx: AnnotationTypeDeclarationContext = new AnnotationTypeDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, JavaParser.RULE_annotationTypeDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 805;
			this.match(JavaParser.T__48);
			this.state = 806;
			this.match(JavaParser.T__21);
			this.state = 807;
			this.match(JavaParser.Identifier);
			this.state = 808;
			this.annotationTypeBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotationTypeBody(): AnnotationTypeBodyContext {
		let _localctx: AnnotationTypeBodyContext = new AnnotationTypeBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, JavaParser.RULE_annotationTypeBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 810;
			this.match(JavaParser.T__19);
			this.state = 814;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.T__3) | (1 << JavaParser.T__6) | (1 << JavaParser.T__9) | (1 << JavaParser.T__10) | (1 << JavaParser.T__11) | (1 << JavaParser.T__12) | (1 << JavaParser.T__13) | (1 << JavaParser.T__14) | (1 << JavaParser.T__15) | (1 << JavaParser.T__21) | (1 << JavaParser.T__24) | (1 << JavaParser.T__27) | (1 << JavaParser.T__28) | (1 << JavaParser.T__29) | (1 << JavaParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (JavaParser.T__31 - 32)) | (1 << (JavaParser.T__32 - 32)) | (1 << (JavaParser.T__33 - 32)) | (1 << (JavaParser.T__34 - 32)) | (1 << (JavaParser.T__35 - 32)) | (1 << (JavaParser.T__36 - 32)) | (1 << (JavaParser.T__37 - 32)) | (1 << (JavaParser.T__38 - 32)) | (1 << (JavaParser.T__48 - 32)))) !== 0) || _la === JavaParser.ENUM || _la === JavaParser.Identifier) {
				{
				{
				this.state = 811;
				this.annotationTypeElementDeclaration();
				}
				}
				this.state = 816;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 817;
			this.match(JavaParser.T__20);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotationTypeElementDeclaration(): AnnotationTypeElementDeclarationContext {
		let _localctx: AnnotationTypeElementDeclarationContext = new AnnotationTypeElementDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, JavaParser.RULE_annotationTypeElementDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 819;
			this.modifiers();
			this.state = 820;
			this.annotationTypeElementRest();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotationTypeElementRest(): AnnotationTypeElementRestContext {
		let _localctx: AnnotationTypeElementRestContext = new AnnotationTypeElementRestContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, JavaParser.RULE_annotationTypeElementRest);
		let _la: number;
		try {
			this.state = 842;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.T__31:
			case JavaParser.T__32:
			case JavaParser.T__33:
			case JavaParser.T__34:
			case JavaParser.T__35:
			case JavaParser.T__36:
			case JavaParser.T__37:
			case JavaParser.T__38:
			case JavaParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 822;
				this.type();
				this.state = 823;
				this.annotationMethodOrConstantRest();
				this.state = 824;
				this.match(JavaParser.T__1);
				}
				break;
			case JavaParser.T__6:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 826;
				this.classDeclaration();
				this.state = 828;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JavaParser.T__1) {
					{
					this.state = 827;
					this.match(JavaParser.T__1);
					}
				}

				}
				break;
			case JavaParser.T__21:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 830;
				this.normalInterfaceDeclaration();
				this.state = 832;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JavaParser.T__1) {
					{
					this.state = 831;
					this.match(JavaParser.T__1);
					}
				}

				}
				break;
			case JavaParser.ENUM:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 834;
				this.enumDeclaration();
				this.state = 836;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JavaParser.T__1) {
					{
					this.state = 835;
					this.match(JavaParser.T__1);
					}
				}

				}
				break;
			case JavaParser.T__48:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 838;
				this.annotationTypeDeclaration();
				this.state = 840;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JavaParser.T__1) {
					{
					this.state = 839;
					this.match(JavaParser.T__1);
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotationMethodOrConstantRest(): AnnotationMethodOrConstantRestContext {
		let _localctx: AnnotationMethodOrConstantRestContext = new AnnotationMethodOrConstantRestContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, JavaParser.RULE_annotationMethodOrConstantRest);
		try {
			this.state = 846;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 95, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 844;
				this.annotationMethodRest();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 845;
				this.annotationConstantRest();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotationMethodRest(): AnnotationMethodRestContext {
		let _localctx: AnnotationMethodRestContext = new AnnotationMethodRestContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, JavaParser.RULE_annotationMethodRest);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 848;
			this.match(JavaParser.Identifier);
			this.state = 849;
			this.match(JavaParser.T__41);
			this.state = 850;
			this.match(JavaParser.T__42);
			this.state = 852;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.T__49) {
				{
				this.state = 851;
				this.defaultValue();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotationConstantRest(): AnnotationConstantRestContext {
		let _localctx: AnnotationConstantRestContext = new AnnotationConstantRestContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, JavaParser.RULE_annotationConstantRest);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 854;
			this.variableDeclarators();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public defaultValue(): DefaultValueContext {
		let _localctx: DefaultValueContext = new DefaultValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, JavaParser.RULE_defaultValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 856;
			this.match(JavaParser.T__49);
			this.state = 857;
			this.elementValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, JavaParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 859;
			this.match(JavaParser.T__19);
			this.state = 863;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.T__1) | (1 << JavaParser.T__6) | (1 << JavaParser.T__13) | (1 << JavaParser.T__19) | (1 << JavaParser.T__21) | (1 << JavaParser.T__24) | (1 << JavaParser.T__28))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (JavaParser.T__31 - 32)) | (1 << (JavaParser.T__32 - 32)) | (1 << (JavaParser.T__33 - 32)) | (1 << (JavaParser.T__34 - 32)) | (1 << (JavaParser.T__35 - 32)) | (1 << (JavaParser.T__36 - 32)) | (1 << (JavaParser.T__37 - 32)) | (1 << (JavaParser.T__38 - 32)) | (1 << (JavaParser.T__40 - 32)) | (1 << (JavaParser.T__41 - 32)) | (1 << (JavaParser.T__44 - 32)) | (1 << (JavaParser.T__45 - 32)) | (1 << (JavaParser.T__46 - 32)) | (1 << (JavaParser.T__47 - 32)) | (1 << (JavaParser.T__48 - 32)) | (1 << (JavaParser.T__51 - 32)) | (1 << (JavaParser.T__53 - 32)) | (1 << (JavaParser.T__54 - 32)) | (1 << (JavaParser.T__55 - 32)) | (1 << (JavaParser.T__56 - 32)) | (1 << (JavaParser.T__58 - 32)) | (1 << (JavaParser.T__59 - 32)) | (1 << (JavaParser.T__60 - 32)) | (1 << (JavaParser.T__61 - 32)) | (1 << (JavaParser.T__62 - 32)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (JavaParser.T__65 - 66)) | (1 << (JavaParser.T__66 - 66)) | (1 << (JavaParser.T__67 - 66)) | (1 << (JavaParser.T__68 - 66)) | (1 << (JavaParser.T__69 - 66)) | (1 << (JavaParser.T__70 - 66)) | (1 << (JavaParser.T__71 - 66)) | (1 << (JavaParser.HexLiteral - 66)) | (1 << (JavaParser.DecimalLiteral - 66)) | (1 << (JavaParser.OctalLiteral - 66)) | (1 << (JavaParser.FloatingPointLiteral - 66)) | (1 << (JavaParser.CharacterLiteral - 66)) | (1 << (JavaParser.StringLiteral - 66)) | (1 << (JavaParser.ASSERT - 66)))) !== 0) || _la === JavaParser.Identifier) {
				{
				{
				this.state = 860;
				this.blockStatement();
				}
				}
				this.state = 865;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 866;
			this.match(JavaParser.T__20);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public blockStatement(): BlockStatementContext {
		let _localctx: BlockStatementContext = new BlockStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, JavaParser.RULE_blockStatement);
		try {
			this.state = 872;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 98, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 868;
				this.localVariableDeclarationStatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 869;
				this.classDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 870;
				this.interfaceDeclaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 871;
				this.statement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public localVariableDeclarationStatement(): LocalVariableDeclarationStatementContext {
		let _localctx: LocalVariableDeclarationStatementContext = new LocalVariableDeclarationStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, JavaParser.RULE_localVariableDeclarationStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 874;
			this.localVariableDeclaration();
			this.state = 875;
			this.match(JavaParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public localVariableDeclaration(): LocalVariableDeclarationContext {
		let _localctx: LocalVariableDeclarationContext = new LocalVariableDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, JavaParser.RULE_localVariableDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 877;
			this.variableModifiers();
			this.state = 878;
			this.type();
			this.state = 879;
			this.variableDeclarators();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableModifiers(): VariableModifiersContext {
		let _localctx: VariableModifiersContext = new VariableModifiersContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, JavaParser.RULE_variableModifiers);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 884;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JavaParser.T__13 || _la === JavaParser.T__48) {
				{
				{
				this.state = 881;
				this.variableModifier();
				}
				}
				this.state = 886;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, JavaParser.RULE_statement);
		let _la: number;
		try {
			this.state = 964;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 106, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 887;
				this.block();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 888;
				this.match(JavaParser.ASSERT);
				this.state = 889;
				this.expression(0);
				this.state = 892;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JavaParser.T__50) {
					{
					this.state = 890;
					this.match(JavaParser.T__50);
					this.state = 891;
					this.expression(0);
					}
				}

				this.state = 894;
				this.match(JavaParser.T__1);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 896;
				this.match(JavaParser.T__51);
				this.state = 897;
				this.parExpression();
				this.state = 898;
				this.statement();
				this.state = 901;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 101, this._ctx) ) {
				case 1:
					{
					this.state = 899;
					this.match(JavaParser.T__52);
					this.state = 900;
					this.statement();
					}
					break;
				}
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 903;
				this.match(JavaParser.T__53);
				this.state = 904;
				this.match(JavaParser.T__41);
				this.state = 905;
				this.forControl();
				this.state = 906;
				this.match(JavaParser.T__42);
				this.state = 907;
				this.statement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 909;
				this.match(JavaParser.T__54);
				this.state = 910;
				this.parExpression();
				this.state = 911;
				this.statement();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 913;
				this.match(JavaParser.T__55);
				this.state = 914;
				this.statement();
				this.state = 915;
				this.match(JavaParser.T__54);
				this.state = 916;
				this.parExpression();
				this.state = 917;
				this.match(JavaParser.T__1);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 919;
				this.match(JavaParser.T__56);
				this.state = 920;
				this.block();
				this.state = 928;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 102, this._ctx) ) {
				case 1:
					{
					this.state = 921;
					this.catches();
					this.state = 922;
					this.match(JavaParser.T__57);
					this.state = 923;
					this.block();
					}
					break;

				case 2:
					{
					this.state = 925;
					this.catches();
					}
					break;

				case 3:
					{
					this.state = 926;
					this.match(JavaParser.T__57);
					this.state = 927;
					this.block();
					}
					break;
				}
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 930;
				this.match(JavaParser.T__58);
				this.state = 931;
				this.parExpression();
				this.state = 932;
				this.switchBlock();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 934;
				this.match(JavaParser.T__28);
				this.state = 935;
				this.parExpression();
				this.state = 936;
				this.block();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 938;
				this.match(JavaParser.T__59);
				this.state = 940;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 25)) & ~0x1F) === 0 && ((1 << (_la - 25)) & ((1 << (JavaParser.T__24 - 25)) | (1 << (JavaParser.T__31 - 25)) | (1 << (JavaParser.T__32 - 25)) | (1 << (JavaParser.T__33 - 25)) | (1 << (JavaParser.T__34 - 25)) | (1 << (JavaParser.T__35 - 25)) | (1 << (JavaParser.T__36 - 25)) | (1 << (JavaParser.T__37 - 25)) | (1 << (JavaParser.T__38 - 25)) | (1 << (JavaParser.T__40 - 25)) | (1 << (JavaParser.T__41 - 25)) | (1 << (JavaParser.T__44 - 25)) | (1 << (JavaParser.T__45 - 25)) | (1 << (JavaParser.T__46 - 25)) | (1 << (JavaParser.T__47 - 25)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (JavaParser.T__65 - 66)) | (1 << (JavaParser.T__66 - 66)) | (1 << (JavaParser.T__67 - 66)) | (1 << (JavaParser.T__68 - 66)) | (1 << (JavaParser.T__69 - 66)) | (1 << (JavaParser.T__70 - 66)) | (1 << (JavaParser.T__71 - 66)) | (1 << (JavaParser.HexLiteral - 66)) | (1 << (JavaParser.DecimalLiteral - 66)) | (1 << (JavaParser.OctalLiteral - 66)) | (1 << (JavaParser.FloatingPointLiteral - 66)) | (1 << (JavaParser.CharacterLiteral - 66)) | (1 << (JavaParser.StringLiteral - 66)))) !== 0) || _la === JavaParser.Identifier) {
					{
					this.state = 939;
					this.expression(0);
					}
				}

				this.state = 942;
				this.match(JavaParser.T__1);
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 943;
				this.match(JavaParser.T__60);
				this.state = 944;
				this.expression(0);
				this.state = 945;
				this.match(JavaParser.T__1);
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 947;
				this.match(JavaParser.T__61);
				this.state = 949;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JavaParser.Identifier) {
					{
					this.state = 948;
					this.match(JavaParser.Identifier);
					}
				}

				this.state = 951;
				this.match(JavaParser.T__1);
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 952;
				this.match(JavaParser.T__62);
				this.state = 954;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === JavaParser.Identifier) {
					{
					this.state = 953;
					this.match(JavaParser.Identifier);
					}
				}

				this.state = 956;
				this.match(JavaParser.T__1);
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 957;
				this.match(JavaParser.T__1);
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 958;
				this.statementExpression();
				this.state = 959;
				this.match(JavaParser.T__1);
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 961;
				this.match(JavaParser.Identifier);
				this.state = 962;
				this.match(JavaParser.T__50);
				this.state = 963;
				this.statement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public catches(): CatchesContext {
		let _localctx: CatchesContext = new CatchesContext(this._ctx, this.state);
		this.enterRule(_localctx, 170, JavaParser.RULE_catches);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 966;
			this.catchClause();
			this.state = 970;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JavaParser.T__63) {
				{
				{
				this.state = 967;
				this.catchClause();
				}
				}
				this.state = 972;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public catchClause(): CatchClauseContext {
		let _localctx: CatchClauseContext = new CatchClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 172, JavaParser.RULE_catchClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 973;
			this.match(JavaParser.T__63);
			this.state = 974;
			this.match(JavaParser.T__41);
			this.state = 975;
			this.formalParameter();
			this.state = 976;
			this.match(JavaParser.T__42);
			this.state = 977;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public formalParameter(): FormalParameterContext {
		let _localctx: FormalParameterContext = new FormalParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 174, JavaParser.RULE_formalParameter);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 979;
			this.variableModifiers();
			this.state = 980;
			this.type();
			this.state = 981;
			this.variableDeclaratorId();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public switchBlock(): SwitchBlockContext {
		let _localctx: SwitchBlockContext = new SwitchBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 176, JavaParser.RULE_switchBlock);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 983;
			this.match(JavaParser.T__19);
			this.state = 987;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 108, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 984;
					this.switchBlockStatementGroup();
					}
					}
				}
				this.state = 989;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 108, this._ctx);
			}
			this.state = 993;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JavaParser.T__49 || _la === JavaParser.T__64) {
				{
				{
				this.state = 990;
				this.switchLabel();
				}
				}
				this.state = 995;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 996;
			this.match(JavaParser.T__20);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public switchBlockStatementGroup(): SwitchBlockStatementGroupContext {
		let _localctx: SwitchBlockStatementGroupContext = new SwitchBlockStatementGroupContext(this._ctx, this.state);
		this.enterRule(_localctx, 178, JavaParser.RULE_switchBlockStatementGroup);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 999;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 998;
					this.switchLabel();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1001;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 110, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 1006;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.T__1) | (1 << JavaParser.T__6) | (1 << JavaParser.T__13) | (1 << JavaParser.T__19) | (1 << JavaParser.T__21) | (1 << JavaParser.T__24) | (1 << JavaParser.T__28))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (JavaParser.T__31 - 32)) | (1 << (JavaParser.T__32 - 32)) | (1 << (JavaParser.T__33 - 32)) | (1 << (JavaParser.T__34 - 32)) | (1 << (JavaParser.T__35 - 32)) | (1 << (JavaParser.T__36 - 32)) | (1 << (JavaParser.T__37 - 32)) | (1 << (JavaParser.T__38 - 32)) | (1 << (JavaParser.T__40 - 32)) | (1 << (JavaParser.T__41 - 32)) | (1 << (JavaParser.T__44 - 32)) | (1 << (JavaParser.T__45 - 32)) | (1 << (JavaParser.T__46 - 32)) | (1 << (JavaParser.T__47 - 32)) | (1 << (JavaParser.T__48 - 32)) | (1 << (JavaParser.T__51 - 32)) | (1 << (JavaParser.T__53 - 32)) | (1 << (JavaParser.T__54 - 32)) | (1 << (JavaParser.T__55 - 32)) | (1 << (JavaParser.T__56 - 32)) | (1 << (JavaParser.T__58 - 32)) | (1 << (JavaParser.T__59 - 32)) | (1 << (JavaParser.T__60 - 32)) | (1 << (JavaParser.T__61 - 32)) | (1 << (JavaParser.T__62 - 32)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (JavaParser.T__65 - 66)) | (1 << (JavaParser.T__66 - 66)) | (1 << (JavaParser.T__67 - 66)) | (1 << (JavaParser.T__68 - 66)) | (1 << (JavaParser.T__69 - 66)) | (1 << (JavaParser.T__70 - 66)) | (1 << (JavaParser.T__71 - 66)) | (1 << (JavaParser.HexLiteral - 66)) | (1 << (JavaParser.DecimalLiteral - 66)) | (1 << (JavaParser.OctalLiteral - 66)) | (1 << (JavaParser.FloatingPointLiteral - 66)) | (1 << (JavaParser.CharacterLiteral - 66)) | (1 << (JavaParser.StringLiteral - 66)) | (1 << (JavaParser.ASSERT - 66)))) !== 0) || _la === JavaParser.Identifier) {
				{
				{
				this.state = 1003;
				this.blockStatement();
				}
				}
				this.state = 1008;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public switchLabel(): SwitchLabelContext {
		let _localctx: SwitchLabelContext = new SwitchLabelContext(this._ctx, this.state);
		this.enterRule(_localctx, 180, JavaParser.RULE_switchLabel);
		try {
			this.state = 1019;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 112, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1009;
				this.match(JavaParser.T__64);
				this.state = 1010;
				this.constantExpression();
				this.state = 1011;
				this.match(JavaParser.T__50);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1013;
				this.match(JavaParser.T__64);
				this.state = 1014;
				this.enumConstantName();
				this.state = 1015;
				this.match(JavaParser.T__50);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1017;
				this.match(JavaParser.T__49);
				this.state = 1018;
				this.match(JavaParser.T__50);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forControl(): ForControlContext {
		let _localctx: ForControlContext = new ForControlContext(this._ctx, this.state);
		this.enterRule(_localctx, 182, JavaParser.RULE_forControl);
		let _la: number;
		try {
			this.state = 1033;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 116, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1021;
				this.enhancedForControl();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1023;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 14)) & ~0x1F) === 0 && ((1 << (_la - 14)) & ((1 << (JavaParser.T__13 - 14)) | (1 << (JavaParser.T__24 - 14)) | (1 << (JavaParser.T__31 - 14)) | (1 << (JavaParser.T__32 - 14)) | (1 << (JavaParser.T__33 - 14)) | (1 << (JavaParser.T__34 - 14)) | (1 << (JavaParser.T__35 - 14)) | (1 << (JavaParser.T__36 - 14)) | (1 << (JavaParser.T__37 - 14)) | (1 << (JavaParser.T__38 - 14)) | (1 << (JavaParser.T__40 - 14)) | (1 << (JavaParser.T__41 - 14)) | (1 << (JavaParser.T__44 - 14)))) !== 0) || ((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & ((1 << (JavaParser.T__45 - 46)) | (1 << (JavaParser.T__46 - 46)) | (1 << (JavaParser.T__47 - 46)) | (1 << (JavaParser.T__48 - 46)) | (1 << (JavaParser.T__65 - 46)) | (1 << (JavaParser.T__66 - 46)) | (1 << (JavaParser.T__67 - 46)) | (1 << (JavaParser.T__68 - 46)) | (1 << (JavaParser.T__69 - 46)) | (1 << (JavaParser.T__70 - 46)) | (1 << (JavaParser.T__71 - 46)))) !== 0) || ((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & ((1 << (JavaParser.HexLiteral - 90)) | (1 << (JavaParser.DecimalLiteral - 90)) | (1 << (JavaParser.OctalLiteral - 90)) | (1 << (JavaParser.FloatingPointLiteral - 90)) | (1 << (JavaParser.CharacterLiteral - 90)) | (1 << (JavaParser.StringLiteral - 90)) | (1 << (JavaParser.Identifier - 90)))) !== 0)) {
					{
					this.state = 1022;
					this.forInit();
					}
				}

				this.state = 1025;
				this.match(JavaParser.T__1);
				this.state = 1027;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 25)) & ~0x1F) === 0 && ((1 << (_la - 25)) & ((1 << (JavaParser.T__24 - 25)) | (1 << (JavaParser.T__31 - 25)) | (1 << (JavaParser.T__32 - 25)) | (1 << (JavaParser.T__33 - 25)) | (1 << (JavaParser.T__34 - 25)) | (1 << (JavaParser.T__35 - 25)) | (1 << (JavaParser.T__36 - 25)) | (1 << (JavaParser.T__37 - 25)) | (1 << (JavaParser.T__38 - 25)) | (1 << (JavaParser.T__40 - 25)) | (1 << (JavaParser.T__41 - 25)) | (1 << (JavaParser.T__44 - 25)) | (1 << (JavaParser.T__45 - 25)) | (1 << (JavaParser.T__46 - 25)) | (1 << (JavaParser.T__47 - 25)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (JavaParser.T__65 - 66)) | (1 << (JavaParser.T__66 - 66)) | (1 << (JavaParser.T__67 - 66)) | (1 << (JavaParser.T__68 - 66)) | (1 << (JavaParser.T__69 - 66)) | (1 << (JavaParser.T__70 - 66)) | (1 << (JavaParser.T__71 - 66)) | (1 << (JavaParser.HexLiteral - 66)) | (1 << (JavaParser.DecimalLiteral - 66)) | (1 << (JavaParser.OctalLiteral - 66)) | (1 << (JavaParser.FloatingPointLiteral - 66)) | (1 << (JavaParser.CharacterLiteral - 66)) | (1 << (JavaParser.StringLiteral - 66)))) !== 0) || _la === JavaParser.Identifier) {
					{
					this.state = 1026;
					this.expression(0);
					}
				}

				this.state = 1029;
				this.match(JavaParser.T__1);
				this.state = 1031;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 25)) & ~0x1F) === 0 && ((1 << (_la - 25)) & ((1 << (JavaParser.T__24 - 25)) | (1 << (JavaParser.T__31 - 25)) | (1 << (JavaParser.T__32 - 25)) | (1 << (JavaParser.T__33 - 25)) | (1 << (JavaParser.T__34 - 25)) | (1 << (JavaParser.T__35 - 25)) | (1 << (JavaParser.T__36 - 25)) | (1 << (JavaParser.T__37 - 25)) | (1 << (JavaParser.T__38 - 25)) | (1 << (JavaParser.T__40 - 25)) | (1 << (JavaParser.T__41 - 25)) | (1 << (JavaParser.T__44 - 25)) | (1 << (JavaParser.T__45 - 25)) | (1 << (JavaParser.T__46 - 25)) | (1 << (JavaParser.T__47 - 25)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (JavaParser.T__65 - 66)) | (1 << (JavaParser.T__66 - 66)) | (1 << (JavaParser.T__67 - 66)) | (1 << (JavaParser.T__68 - 66)) | (1 << (JavaParser.T__69 - 66)) | (1 << (JavaParser.T__70 - 66)) | (1 << (JavaParser.T__71 - 66)) | (1 << (JavaParser.HexLiteral - 66)) | (1 << (JavaParser.DecimalLiteral - 66)) | (1 << (JavaParser.OctalLiteral - 66)) | (1 << (JavaParser.FloatingPointLiteral - 66)) | (1 << (JavaParser.CharacterLiteral - 66)) | (1 << (JavaParser.StringLiteral - 66)))) !== 0) || _la === JavaParser.Identifier) {
					{
					this.state = 1030;
					this.forUpdate();
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forInit(): ForInitContext {
		let _localctx: ForInitContext = new ForInitContext(this._ctx, this.state);
		this.enterRule(_localctx, 184, JavaParser.RULE_forInit);
		try {
			this.state = 1037;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 117, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1035;
				this.localVariableDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1036;
				this.expressionList();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enhancedForControl(): EnhancedForControlContext {
		let _localctx: EnhancedForControlContext = new EnhancedForControlContext(this._ctx, this.state);
		this.enterRule(_localctx, 186, JavaParser.RULE_enhancedForControl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1039;
			this.variableModifiers();
			this.state = 1040;
			this.type();
			this.state = 1041;
			this.match(JavaParser.Identifier);
			this.state = 1042;
			this.match(JavaParser.T__50);
			this.state = 1043;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forUpdate(): ForUpdateContext {
		let _localctx: ForUpdateContext = new ForUpdateContext(this._ctx, this.state);
		this.enterRule(_localctx, 188, JavaParser.RULE_forUpdate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1045;
			this.expressionList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parExpression(): ParExpressionContext {
		let _localctx: ParExpressionContext = new ParExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 190, JavaParser.RULE_parExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1047;
			this.match(JavaParser.T__41);
			this.state = 1048;
			this.expression(0);
			this.state = 1049;
			this.match(JavaParser.T__42);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionList(): ExpressionListContext {
		let _localctx: ExpressionListContext = new ExpressionListContext(this._ctx, this.state);
		this.enterRule(_localctx, 192, JavaParser.RULE_expressionList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1051;
			this.expression(0);
			this.state = 1056;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === JavaParser.T__16) {
				{
				{
				this.state = 1052;
				this.match(JavaParser.T__16);
				this.state = 1053;
				this.expression(0);
				}
				}
				this.state = 1058;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statementExpression(): StatementExpressionContext {
		let _localctx: StatementExpressionContext = new StatementExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 194, JavaParser.RULE_statementExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1059;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constantExpression(): ConstantExpressionContext {
		let _localctx: ConstantExpressionContext = new ConstantExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 196, JavaParser.RULE_constantExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1061;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 198;
		this.enterRecursionRule(_localctx, 198, JavaParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1076;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 119, this._ctx) ) {
			case 1:
				{
				this.state = 1064;
				this.primary();
				}
				break;

			case 2:
				{
				this.state = 1065;
				_la = this._input.LA(1);
				if (!(((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (JavaParser.T__66 - 67)) | (1 << (JavaParser.T__67 - 67)) | (1 << (JavaParser.T__68 - 67)) | (1 << (JavaParser.T__69 - 67)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1066;
				this.expression(17);
				}
				break;

			case 3:
				{
				this.state = 1067;
				_la = this._input.LA(1);
				if (!(_la === JavaParser.T__70 || _la === JavaParser.T__71)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1068;
				this.expression(16);
				}
				break;

			case 4:
				{
				this.state = 1069;
				this.match(JavaParser.T__41);
				this.state = 1070;
				this.type();
				this.state = 1071;
				this.match(JavaParser.T__42);
				this.state = 1072;
				this.expression(15);
				}
				break;

			case 5:
				{
				this.state = 1074;
				this.match(JavaParser.T__65);
				this.state = 1075;
				this.creator();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1204;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 128, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 1202;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 127, this._ctx) ) {
					case 1:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
						this.state = 1078;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 1079;
						_la = this._input.LA(1);
						if (!(_la === JavaParser.T__5 || _la === JavaParser.T__72 || _la === JavaParser.T__73)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1080;
						this.expression(14);
						}
						break;

					case 2:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
						this.state = 1081;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 1082;
						_la = this._input.LA(1);
						if (!(_la === JavaParser.T__68 || _la === JavaParser.T__69)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1083;
						this.expression(13);
						}
						break;

					case 3:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
						this.state = 1084;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 1092;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 120, this._ctx) ) {
						case 1:
							{
							this.state = 1085;
							this.match(JavaParser.T__15);
							this.state = 1086;
							this.match(JavaParser.T__15);
							}
							break;

						case 2:
							{
							this.state = 1087;
							this.match(JavaParser.T__17);
							this.state = 1088;
							this.match(JavaParser.T__17);
							this.state = 1089;
							this.match(JavaParser.T__17);
							}
							break;

						case 3:
							{
							this.state = 1090;
							this.match(JavaParser.T__17);
							this.state = 1091;
							this.match(JavaParser.T__17);
							}
							break;
						}
						this.state = 1094;
						this.expression(12);
						}
						break;

					case 4:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
						this.state = 1095;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 1102;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 121, this._ctx) ) {
						case 1:
							{
							this.state = 1096;
							this.match(JavaParser.T__15);
							this.state = 1097;
							this.match(JavaParser.T__26);
							}
							break;

						case 2:
							{
							this.state = 1098;
							this.match(JavaParser.T__17);
							this.state = 1099;
							this.match(JavaParser.T__26);
							}
							break;

						case 3:
							{
							this.state = 1100;
							this.match(JavaParser.T__17);
							}
							break;

						case 4:
							{
							this.state = 1101;
							this.match(JavaParser.T__15);
							}
							break;
						}
						this.state = 1104;
						this.expression(11);
						}
						break;

					case 5:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
						this.state = 1105;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 1106;
						_la = this._input.LA(1);
						if (!(_la === JavaParser.T__75 || _la === JavaParser.T__76)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1107;
						this.expression(9);
						}
						break;

					case 6:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
						this.state = 1108;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 1109;
						this.match(JavaParser.T__18);
						this.state = 1110;
						this.expression(8);
						}
						break;

					case 7:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
						this.state = 1111;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 1112;
						this.match(JavaParser.T__77);
						this.state = 1113;
						this.expression(7);
						}
						break;

					case 8:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
						this.state = 1114;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 1115;
						this.match(JavaParser.T__78);
						this.state = 1116;
						this.expression(6);
						}
						break;

					case 9:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
						this.state = 1117;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 1118;
						this.match(JavaParser.T__79);
						this.state = 1119;
						this.expression(5);
						}
						break;

					case 10:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
						this.state = 1120;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 1121;
						this.match(JavaParser.T__80);
						this.state = 1122;
						this.expression(4);
						}
						break;

					case 11:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
						this.state = 1123;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 1124;
						this.match(JavaParser.T__39);
						this.state = 1125;
						this.expression(0);
						this.state = 1126;
						this.match(JavaParser.T__50);
						this.state = 1127;
						this.expression(3);
						}
						break;

					case 12:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
						this.state = 1129;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 1149;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 122, this._ctx) ) {
						case 1:
							{
							this.state = 1130;
							this.match(JavaParser.T__81);
							}
							break;

						case 2:
							{
							this.state = 1131;
							this.match(JavaParser.T__82);
							}
							break;

						case 3:
							{
							this.state = 1132;
							this.match(JavaParser.T__83);
							}
							break;

						case 4:
							{
							this.state = 1133;
							this.match(JavaParser.T__84);
							}
							break;

						case 5:
							{
							this.state = 1134;
							this.match(JavaParser.T__85);
							}
							break;

						case 6:
							{
							this.state = 1135;
							this.match(JavaParser.T__86);
							}
							break;

						case 7:
							{
							this.state = 1136;
							this.match(JavaParser.T__87);
							}
							break;

						case 8:
							{
							this.state = 1137;
							this.match(JavaParser.T__26);
							}
							break;

						case 9:
							{
							this.state = 1138;
							this.match(JavaParser.T__17);
							this.state = 1139;
							this.match(JavaParser.T__17);
							this.state = 1140;
							this.match(JavaParser.T__26);
							}
							break;

						case 10:
							{
							this.state = 1141;
							this.match(JavaParser.T__17);
							this.state = 1142;
							this.match(JavaParser.T__17);
							this.state = 1143;
							this.match(JavaParser.T__17);
							this.state = 1144;
							this.match(JavaParser.T__26);
							}
							break;

						case 11:
							{
							this.state = 1145;
							this.match(JavaParser.T__15);
							this.state = 1146;
							this.match(JavaParser.T__15);
							this.state = 1147;
							this.match(JavaParser.T__26);
							}
							break;

						case 12:
							{
							this.state = 1148;
							this.match(JavaParser.T__88);
							}
							break;
						}
						this.state = 1151;
						this.expression(2);
						}
						break;

					case 13:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
						this.state = 1152;
						if (!(this.precpred(this._ctx, 26))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 26)");
						}
						this.state = 1153;
						this.match(JavaParser.T__4);
						this.state = 1154;
						this.match(JavaParser.Identifier);
						}
						break;

					case 14:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
						this.state = 1155;
						if (!(this.precpred(this._ctx, 25))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 25)");
						}
						this.state = 1156;
						this.match(JavaParser.T__4);
						this.state = 1157;
						this.match(JavaParser.T__44);
						}
						break;

					case 15:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
						this.state = 1158;
						if (!(this.precpred(this._ctx, 24))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 24)");
						}
						this.state = 1159;
						this.match(JavaParser.T__4);
						this.state = 1160;
						this.match(JavaParser.T__40);
						this.state = 1161;
						this.match(JavaParser.T__41);
						this.state = 1163;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (((((_la - 25)) & ~0x1F) === 0 && ((1 << (_la - 25)) & ((1 << (JavaParser.T__24 - 25)) | (1 << (JavaParser.T__31 - 25)) | (1 << (JavaParser.T__32 - 25)) | (1 << (JavaParser.T__33 - 25)) | (1 << (JavaParser.T__34 - 25)) | (1 << (JavaParser.T__35 - 25)) | (1 << (JavaParser.T__36 - 25)) | (1 << (JavaParser.T__37 - 25)) | (1 << (JavaParser.T__38 - 25)) | (1 << (JavaParser.T__40 - 25)) | (1 << (JavaParser.T__41 - 25)) | (1 << (JavaParser.T__44 - 25)) | (1 << (JavaParser.T__45 - 25)) | (1 << (JavaParser.T__46 - 25)) | (1 << (JavaParser.T__47 - 25)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (JavaParser.T__65 - 66)) | (1 << (JavaParser.T__66 - 66)) | (1 << (JavaParser.T__67 - 66)) | (1 << (JavaParser.T__68 - 66)) | (1 << (JavaParser.T__69 - 66)) | (1 << (JavaParser.T__70 - 66)) | (1 << (JavaParser.T__71 - 66)) | (1 << (JavaParser.HexLiteral - 66)) | (1 << (JavaParser.DecimalLiteral - 66)) | (1 << (JavaParser.OctalLiteral - 66)) | (1 << (JavaParser.FloatingPointLiteral - 66)) | (1 << (JavaParser.CharacterLiteral - 66)) | (1 << (JavaParser.StringLiteral - 66)))) !== 0) || _la === JavaParser.Identifier) {
							{
							this.state = 1162;
							this.expressionList();
							}
						}

						this.state = 1165;
						this.match(JavaParser.T__42);
						}
						break;

					case 16:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
						this.state = 1166;
						if (!(this.precpred(this._ctx, 23))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 23)");
						}
						this.state = 1167;
						this.match(JavaParser.T__4);
						this.state = 1168;
						this.match(JavaParser.T__65);
						this.state = 1169;
						this.match(JavaParser.Identifier);
						this.state = 1170;
						this.match(JavaParser.T__41);
						this.state = 1172;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (((((_la - 25)) & ~0x1F) === 0 && ((1 << (_la - 25)) & ((1 << (JavaParser.T__24 - 25)) | (1 << (JavaParser.T__31 - 25)) | (1 << (JavaParser.T__32 - 25)) | (1 << (JavaParser.T__33 - 25)) | (1 << (JavaParser.T__34 - 25)) | (1 << (JavaParser.T__35 - 25)) | (1 << (JavaParser.T__36 - 25)) | (1 << (JavaParser.T__37 - 25)) | (1 << (JavaParser.T__38 - 25)) | (1 << (JavaParser.T__40 - 25)) | (1 << (JavaParser.T__41 - 25)) | (1 << (JavaParser.T__44 - 25)) | (1 << (JavaParser.T__45 - 25)) | (1 << (JavaParser.T__46 - 25)) | (1 << (JavaParser.T__47 - 25)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (JavaParser.T__65 - 66)) | (1 << (JavaParser.T__66 - 66)) | (1 << (JavaParser.T__67 - 66)) | (1 << (JavaParser.T__68 - 66)) | (1 << (JavaParser.T__69 - 66)) | (1 << (JavaParser.T__70 - 66)) | (1 << (JavaParser.T__71 - 66)) | (1 << (JavaParser.HexLiteral - 66)) | (1 << (JavaParser.DecimalLiteral - 66)) | (1 << (JavaParser.OctalLiteral - 66)) | (1 << (JavaParser.FloatingPointLiteral - 66)) | (1 << (JavaParser.CharacterLiteral - 66)) | (1 << (JavaParser.StringLiteral - 66)))) !== 0) || _la === JavaParser.Identifier) {
							{
							this.state = 1171;
							this.expressionList();
							}
						}

						this.state = 1174;
						this.match(JavaParser.T__42);
						}
						break;

					case 17:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
						this.state = 1175;
						if (!(this.precpred(this._ctx, 22))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 22)");
						}
						this.state = 1176;
						this.match(JavaParser.T__4);
						this.state = 1177;
						this.match(JavaParser.T__40);
						this.state = 1178;
						this.match(JavaParser.T__4);
						this.state = 1179;
						this.match(JavaParser.Identifier);
						this.state = 1181;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 125, this._ctx) ) {
						case 1:
							{
							this.state = 1180;
							this.arguments();
							}
							break;
						}
						}
						break;

					case 18:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
						this.state = 1183;
						if (!(this.precpred(this._ctx, 21))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 21)");
						}
						this.state = 1184;
						this.match(JavaParser.T__4);
						this.state = 1185;
						this.explicitGenericInvocation();
						}
						break;

					case 19:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
						this.state = 1186;
						if (!(this.precpred(this._ctx, 20))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 20)");
						}
						this.state = 1187;
						this.match(JavaParser.T__22);
						this.state = 1188;
						this.expression(0);
						this.state = 1189;
						this.match(JavaParser.T__23);
						}
						break;

					case 20:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
						this.state = 1191;
						if (!(this.precpred(this._ctx, 19))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 19)");
						}
						this.state = 1192;
						this.match(JavaParser.T__41);
						this.state = 1194;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (((((_la - 25)) & ~0x1F) === 0 && ((1 << (_la - 25)) & ((1 << (JavaParser.T__24 - 25)) | (1 << (JavaParser.T__31 - 25)) | (1 << (JavaParser.T__32 - 25)) | (1 << (JavaParser.T__33 - 25)) | (1 << (JavaParser.T__34 - 25)) | (1 << (JavaParser.T__35 - 25)) | (1 << (JavaParser.T__36 - 25)) | (1 << (JavaParser.T__37 - 25)) | (1 << (JavaParser.T__38 - 25)) | (1 << (JavaParser.T__40 - 25)) | (1 << (JavaParser.T__41 - 25)) | (1 << (JavaParser.T__44 - 25)) | (1 << (JavaParser.T__45 - 25)) | (1 << (JavaParser.T__46 - 25)) | (1 << (JavaParser.T__47 - 25)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (JavaParser.T__65 - 66)) | (1 << (JavaParser.T__66 - 66)) | (1 << (JavaParser.T__67 - 66)) | (1 << (JavaParser.T__68 - 66)) | (1 << (JavaParser.T__69 - 66)) | (1 << (JavaParser.T__70 - 66)) | (1 << (JavaParser.T__71 - 66)) | (1 << (JavaParser.HexLiteral - 66)) | (1 << (JavaParser.DecimalLiteral - 66)) | (1 << (JavaParser.OctalLiteral - 66)) | (1 << (JavaParser.FloatingPointLiteral - 66)) | (1 << (JavaParser.CharacterLiteral - 66)) | (1 << (JavaParser.StringLiteral - 66)))) !== 0) || _la === JavaParser.Identifier) {
							{
							this.state = 1193;
							this.expressionList();
							}
						}

						this.state = 1196;
						this.match(JavaParser.T__42);
						}
						break;

					case 21:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
						this.state = 1197;
						if (!(this.precpred(this._ctx, 18))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 18)");
						}
						this.state = 1198;
						_la = this._input.LA(1);
						if (!(_la === JavaParser.T__66 || _la === JavaParser.T__67)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						}
						break;

					case 22:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
						this.state = 1199;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 1200;
						this.match(JavaParser.T__74);
						this.state = 1201;
						this.type();
						}
						break;
					}
					}
				}
				this.state = 1206;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 128, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primary(): PrimaryContext {
		let _localctx: PrimaryContext = new PrimaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 200, JavaParser.RULE_primary);
		try {
			this.state = 1222;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 129, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1207;
				this.match(JavaParser.T__41);
				this.state = 1208;
				this.expression(0);
				this.state = 1209;
				this.match(JavaParser.T__42);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1211;
				this.match(JavaParser.T__44);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1212;
				this.match(JavaParser.T__40);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1213;
				this.literal();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1214;
				this.match(JavaParser.Identifier);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1215;
				this.type();
				this.state = 1216;
				this.match(JavaParser.T__4);
				this.state = 1217;
				this.match(JavaParser.T__6);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1219;
				this.match(JavaParser.T__24);
				this.state = 1220;
				this.match(JavaParser.T__4);
				this.state = 1221;
				this.match(JavaParser.T__6);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public creator(): CreatorContext {
		let _localctx: CreatorContext = new CreatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 202, JavaParser.RULE_creator);
		try {
			this.state = 1233;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.T__15:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1224;
				this.nonWildcardTypeArguments();
				this.state = 1225;
				this.createdName();
				this.state = 1226;
				this.classCreatorRest();
				}
				break;
			case JavaParser.T__31:
			case JavaParser.T__32:
			case JavaParser.T__33:
			case JavaParser.T__34:
			case JavaParser.T__35:
			case JavaParser.T__36:
			case JavaParser.T__37:
			case JavaParser.T__38:
			case JavaParser.Identifier:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1228;
				this.createdName();
				this.state = 1231;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case JavaParser.T__22:
					{
					this.state = 1229;
					this.arrayCreatorRest();
					}
					break;
				case JavaParser.T__41:
					{
					this.state = 1230;
					this.classCreatorRest();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public createdName(): CreatedNameContext {
		let _localctx: CreatedNameContext = new CreatedNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 204, JavaParser.RULE_createdName);
		try {
			this.state = 1237;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1235;
				this.classOrInterfaceType();
				}
				break;
			case JavaParser.T__31:
			case JavaParser.T__32:
			case JavaParser.T__33:
			case JavaParser.T__34:
			case JavaParser.T__35:
			case JavaParser.T__36:
			case JavaParser.T__37:
			case JavaParser.T__38:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1236;
				this.primitiveType();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public innerCreator(): InnerCreatorContext {
		let _localctx: InnerCreatorContext = new InnerCreatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 206, JavaParser.RULE_innerCreator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1240;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavaParser.T__15) {
				{
				this.state = 1239;
				this.nonWildcardTypeArguments();
				}
			}

			this.state = 1242;
			this.match(JavaParser.Identifier);
			this.state = 1243;
			this.classCreatorRest();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public explicitGenericInvocation(): ExplicitGenericInvocationContext {
		let _localctx: ExplicitGenericInvocationContext = new ExplicitGenericInvocationContext(this._ctx, this.state);
		this.enterRule(_localctx, 208, JavaParser.RULE_explicitGenericInvocation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1245;
			this.nonWildcardTypeArguments();
			this.state = 1246;
			this.match(JavaParser.Identifier);
			this.state = 1247;
			this.arguments();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayCreatorRest(): ArrayCreatorRestContext {
		let _localctx: ArrayCreatorRestContext = new ArrayCreatorRestContext(this._ctx, this.state);
		this.enterRule(_localctx, 210, JavaParser.RULE_arrayCreatorRest);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1249;
			this.match(JavaParser.T__22);
			this.state = 1277;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavaParser.T__23:
				{
				this.state = 1250;
				this.match(JavaParser.T__23);
				this.state = 1255;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JavaParser.T__22) {
					{
					{
					this.state = 1251;
					this.match(JavaParser.T__22);
					this.state = 1252;
					this.match(JavaParser.T__23);
					}
					}
					this.state = 1257;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1258;
				this.arrayInitializer();
				}
				break;
			case JavaParser.T__24:
			case JavaParser.T__31:
			case JavaParser.T__32:
			case JavaParser.T__33:
			case JavaParser.T__34:
			case JavaParser.T__35:
			case JavaParser.T__36:
			case JavaParser.T__37:
			case JavaParser.T__38:
			case JavaParser.T__40:
			case JavaParser.T__41:
			case JavaParser.T__44:
			case JavaParser.T__45:
			case JavaParser.T__46:
			case JavaParser.T__47:
			case JavaParser.T__65:
			case JavaParser.T__66:
			case JavaParser.T__67:
			case JavaParser.T__68:
			case JavaParser.T__69:
			case JavaParser.T__70:
			case JavaParser.T__71:
			case JavaParser.HexLiteral:
			case JavaParser.DecimalLiteral:
			case JavaParser.OctalLiteral:
			case JavaParser.FloatingPointLiteral:
			case JavaParser.CharacterLiteral:
			case JavaParser.StringLiteral:
			case JavaParser.Identifier:
				{
				this.state = 1259;
				this.expression(0);
				this.state = 1260;
				this.match(JavaParser.T__23);
				this.state = 1267;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 135, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1261;
						this.match(JavaParser.T__22);
						this.state = 1262;
						this.expression(0);
						this.state = 1263;
						this.match(JavaParser.T__23);
						}
						}
					}
					this.state = 1269;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 135, this._ctx);
				}
				this.state = 1274;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 136, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1270;
						this.match(JavaParser.T__22);
						this.state = 1271;
						this.match(JavaParser.T__23);
						}
						}
					}
					this.state = 1276;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 136, this._ctx);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classCreatorRest(): ClassCreatorRestContext {
		let _localctx: ClassCreatorRestContext = new ClassCreatorRestContext(this._ctx, this.state);
		this.enterRule(_localctx, 212, JavaParser.RULE_classCreatorRest);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1279;
			this.arguments();
			this.state = 1281;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 138, this._ctx) ) {
			case 1:
				{
				this.state = 1280;
				this.classBody();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext {
		let _localctx: NonWildcardTypeArgumentsContext = new NonWildcardTypeArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 214, JavaParser.RULE_nonWildcardTypeArguments);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1283;
			this.match(JavaParser.T__15);
			this.state = 1284;
			this.typeList();
			this.state = 1285;
			this.match(JavaParser.T__17);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arguments(): ArgumentsContext {
		let _localctx: ArgumentsContext = new ArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 216, JavaParser.RULE_arguments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1287;
			this.match(JavaParser.T__41);
			this.state = 1289;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 25)) & ~0x1F) === 0 && ((1 << (_la - 25)) & ((1 << (JavaParser.T__24 - 25)) | (1 << (JavaParser.T__31 - 25)) | (1 << (JavaParser.T__32 - 25)) | (1 << (JavaParser.T__33 - 25)) | (1 << (JavaParser.T__34 - 25)) | (1 << (JavaParser.T__35 - 25)) | (1 << (JavaParser.T__36 - 25)) | (1 << (JavaParser.T__37 - 25)) | (1 << (JavaParser.T__38 - 25)) | (1 << (JavaParser.T__40 - 25)) | (1 << (JavaParser.T__41 - 25)) | (1 << (JavaParser.T__44 - 25)) | (1 << (JavaParser.T__45 - 25)) | (1 << (JavaParser.T__46 - 25)) | (1 << (JavaParser.T__47 - 25)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (JavaParser.T__65 - 66)) | (1 << (JavaParser.T__66 - 66)) | (1 << (JavaParser.T__67 - 66)) | (1 << (JavaParser.T__68 - 66)) | (1 << (JavaParser.T__69 - 66)) | (1 << (JavaParser.T__70 - 66)) | (1 << (JavaParser.T__71 - 66)) | (1 << (JavaParser.HexLiteral - 66)) | (1 << (JavaParser.DecimalLiteral - 66)) | (1 << (JavaParser.OctalLiteral - 66)) | (1 << (JavaParser.FloatingPointLiteral - 66)) | (1 << (JavaParser.CharacterLiteral - 66)) | (1 << (JavaParser.StringLiteral - 66)))) !== 0) || _la === JavaParser.Identifier) {
				{
				this.state = 1288;
				this.expressionList();
				}
			}

			this.state = 1291;
			this.match(JavaParser.T__42);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 99:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 13);

		case 1:
			return this.precpred(this._ctx, 12);

		case 2:
			return this.precpred(this._ctx, 11);

		case 3:
			return this.precpred(this._ctx, 10);

		case 4:
			return this.precpred(this._ctx, 8);

		case 5:
			return this.precpred(this._ctx, 7);

		case 6:
			return this.precpred(this._ctx, 6);

		case 7:
			return this.precpred(this._ctx, 5);

		case 8:
			return this.precpred(this._ctx, 4);

		case 9:
			return this.precpred(this._ctx, 3);

		case 10:
			return this.precpred(this._ctx, 2);

		case 11:
			return this.precpred(this._ctx, 1);

		case 12:
			return this.precpred(this._ctx, 26);

		case 13:
			return this.precpred(this._ctx, 25);

		case 14:
			return this.precpred(this._ctx, 24);

		case 15:
			return this.precpred(this._ctx, 23);

		case 16:
			return this.precpred(this._ctx, 22);

		case 17:
			return this.precpred(this._ctx, 21);

		case 18:
			return this.precpred(this._ctx, 20);

		case 19:
			return this.precpred(this._ctx, 19);

		case 20:
			return this.precpred(this._ctx, 18);

		case 21:
			return this.precpred(this._ctx, 9);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 3;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03g\u0510\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
		"X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t" +
		"`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x04g\tg\x04h\th\x04" +
		"i\ti\x04j\tj\x04k\tk\x04l\tl\x04m\tm\x04n\tn\x03\x02\x05\x02\xDE\n\x02" +
		"\x03\x02\x07\x02\xE1\n\x02\f\x02\x0E\x02\xE4\v\x02\x03\x02\x07\x02\xE7" +
		"\n\x02\f\x02\x0E\x02\xEA\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x04\x03\x04\x05\x04\xF4\n\x04\x03\x04\x03\x04\x03\x04\x05" +
		"\x04\xF9\n\x04\x03\x04\x03\x04\x03\x05\x07\x05\xFE\n\x05\f\x05\x0E\x05" +
		"\u0101\v\x05\x03\x05\x03\x05\x03\x05\x05\x05\u0106\n\x05\x03\x05\x05\x05" +
		"\u0109\n\x05\x03\x06\x03\x06\x03\x06\x05\x06\u010E\n\x06\x03\x06\x03\x06" +
		"\x05\x06\u0112\n\x06\x03\x06\x03\x06\x05\x06\u0116\n\x06\x03\x06\x03\x06" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\u011E\n\x07\x03\x07\x03\x07\x03" +
		"\b\x03\b\x05\b\u0124\n\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x05\t\u012E\n\t\x03\n\x07\n\u0131\n\n\f\n\x0E\n\u0134\v\n\x03\v\x03" +
		"\v\x03\v\x03\v\x07\v\u013A\n\v\f\v\x0E\v\u013D\v\v\x03\v\x03\v\x03\f\x03" +
		"\f\x03\f\x05\f\u0144\n\f\x03\r\x03\r\x03\r\x07\r\u0149\n\r\f\r\x0E\r\u014C" +
		"\v\r\x03\x0E\x03\x0E\x05\x0E\u0150\n\x0E\x03\x0E\x05\x0E\u0153\n\x0E\x03" +
		"\x0E\x05\x0E\u0156\n\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x07\x0F" +
		"\u015D\n\x0F\f\x0F\x0E\x0F\u0160\v\x0F\x03\x10\x05\x10\u0163\n\x10\x03" +
		"\x10\x03\x10\x05\x10\u0167\n\x10\x03\x10\x05\x10\u016A\n\x10\x03\x11\x03" +
		"\x11\x07\x11\u016E\n\x11\f\x11\x0E\x11\u0171\v\x11\x03\x12\x03\x12\x03" +
		"\x12\x05\x12\u0176\n\x12\x03\x12\x03\x12\x05\x12\u017A\n\x12\x03\x12\x03" +
		"\x12\x03\x13\x03\x13\x03\x13\x07\x13\u0181\n\x13\f\x13\x0E\x13\u0184\v" +
		"\x13\x03\x14\x03\x14\x07\x14\u0188\n\x14\f\x14\x0E\x14\u018B\v\x14\x03" +
		"\x14\x03\x14\x03\x15\x03\x15\x07\x15\u0191\n\x15\f\x15\x0E\x15\u0194\v" +
		"\x15\x03\x15\x03\x15\x03\x16\x03\x16\x05\x16\u019A\n\x16\x03\x16\x03\x16" +
		"\x03\x16\x03\x16\x05\x16\u01A0\n\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03" +
		"\x17\x03\x17\x05\x17\u01A8\n\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18" +
		"\x07\x18\u01AF\n\x18\f\x18\x0E\x18\u01B2\v\x18\x03\x18\x03\x18\x03\x18" +
		"\x03\x18\x03\x18\x03\x18\x03\x18\x05\x18\u01BB\n\x18\x03\x19\x03\x19\x05" +
		"\x19\u01BF\n\x19\x03\x19\x03\x19\x05\x19\u01C3\n\x19\x03\x1A\x03\x1A\x03" +
		"\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x05\x1C\u01CD\n\x1C\x03\x1C" +
		"\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u01D3\n\x1C\x03\x1C\x03\x1C\x03\x1D\x03" +
		"\x1D\x03\x1D\x03\x1D\x05\x1D\u01DB\n\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E" +
		"\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u01E4\n\x1E\x03\x1F\x03\x1F\x03\x1F\x03" +
		"\x1F\x03 \x03 \x03 \x03 \x05 \u01EE\n \x03!\x03!\x03!\x05!\u01F3\n!\x03" +
		"!\x03!\x05!\u01F7\n!\x03\"\x03\"\x03\"\x07\"\u01FC\n\"\f\"\x0E\"\u01FF" +
		"\v\"\x03\"\x03\"\x05\"\u0203\n\"\x03\"\x03\"\x03#\x03#\x03#\x05#\u020A" +
		"\n#\x03#\x03#\x03#\x03$\x03$\x03$\x05$\u0212\n$\x03$\x03$\x03%\x03%\x03" +
		"%\x03&\x03&\x03&\x07&\u021C\n&\f&\x0E&\u021F\v&\x03\'\x03\'\x03\'\x05" +
		"\'\u0224\n\'\x03(\x03(\x03(\x07(\u0229\n(\f(\x0E(\u022C\v(\x03)\x03)\x07" +
		")\u0230\n)\f)\x0E)\u0233\v)\x03)\x03)\x03)\x03*\x03*\x03*\x07*\u023B\n" +
		"*\f*\x0E*\u023E\v*\x03+\x03+\x05+\u0242\n+\x03,\x03,\x03,\x03,\x07,\u0248" +
		"\n,\f,\x0E,\u024B\v,\x03,\x05,\u024E\n,\x05,\u0250\n,\x03,\x03,\x03-\x03" +
		"-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x05-\u0260\n-\x03" +
		".\x03.\x03/\x03/\x030\x030\x031\x031\x031\x071\u026B\n1\f1\x0E1\u026E" +
		"\v1\x031\x031\x031\x071\u0273\n1\f1\x0E1\u0276\v1\x051\u0278\n1\x032\x03" +
		"2\x052\u027C\n2\x032\x032\x032\x052\u0281\n2\x072\u0283\n2\f2\x0E2\u0286" +
		"\v2\x033\x033\x034\x034\x054\u028C\n4\x035\x035\x035\x035\x075\u0292\n" +
		"5\f5\x0E5\u0295\v5\x035\x035\x036\x036\x036\x036\x056\u029D\n6\x056\u029F" +
		"\n6\x037\x037\x037\x077\u02A4\n7\f7\x0E7\u02A7\v7\x038\x038\x058\u02AB" +
		"\n8\x038\x038\x039\x039\x039\x039\x03:\x03:\x03:\x05:\u02B6\n:\x03:\x03" +
		":\x05:\u02BA\n:\x03;\x03;\x03<\x03<\x05<\u02C0\n<\x03<\x07<\u02C3\n<\f" +
		"<\x0E<\u02C6\v<\x03<\x03<\x03=\x05=\u02CB\n=\x03=\x03=\x03=\x03=\x03=" +
		"\x03=\x03=\x05=\u02D4\n=\x03=\x03=\x03=\x03=\x05=\u02DA\n=\x03>\x03>\x03" +
		">\x07>\u02DF\n>\f>\x0E>\u02E2\v>\x03?\x03?\x03?\x03?\x03?\x03?\x05?\u02EA" +
		"\n?\x03@\x03@\x03A\x03A\x03B\x06B\u02F1\nB\rB\x0EB\u02F2\x03C\x03C\x03" +
		"C\x03C\x03C\x05C\u02FA\nC\x03C\x05C\u02FD\nC\x03D\x03D\x03D\x07D\u0302" +
		"\nD\fD\x0ED\u0305\vD\x03E\x03E\x03E\x07E\u030A\nE\fE\x0EE\u030D\vE\x03" +
		"F\x03F\x03F\x03F\x03G\x03G\x03G\x05G\u0316\nG\x03H\x03H\x03H\x03H\x07" +
		"H\u031C\nH\fH\x0EH\u031F\vH\x05H\u0321\nH\x03H\x05H\u0324\nH\x03H\x03" +
		"H\x03I\x03I\x03I\x03I\x03I\x03J\x03J\x07J\u032F\nJ\fJ\x0EJ\u0332\vJ\x03" +
		"J\x03J\x03K\x03K\x03K\x03L\x03L\x03L\x03L\x03L\x03L\x05L\u033F\nL\x03" +
		"L\x03L\x05L\u0343\nL\x03L\x03L\x05L\u0347\nL\x03L\x03L\x05L\u034B\nL\x05" +
		"L\u034D\nL\x03M\x03M\x05M\u0351\nM\x03N\x03N\x03N\x03N\x05N\u0357\nN\x03" +
		"O\x03O\x03P\x03P\x03P\x03Q\x03Q\x07Q\u0360\nQ\fQ\x0EQ\u0363\vQ\x03Q\x03" +
		"Q\x03R\x03R\x03R\x03R\x05R\u036B\nR\x03S\x03S\x03S\x03T\x03T\x03T\x03" +
		"T\x03U\x07U\u0375\nU\fU\x0EU\u0378\vU\x03V\x03V\x03V\x03V\x03V\x05V\u037F" +
		"\nV\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x05V\u0388\nV\x03V\x03V\x03V\x03" +
		"V\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x03" +
		"V\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x05V\u03A3\nV\x03V\x03V\x03V\x03" +
		"V\x03V\x03V\x03V\x03V\x03V\x03V\x05V\u03AF\nV\x03V\x03V\x03V\x03V\x03" +
		"V\x03V\x03V\x05V\u03B8\nV\x03V\x03V\x03V\x05V\u03BD\nV\x03V\x03V\x03V" +
		"\x03V\x03V\x03V\x03V\x03V\x05V\u03C7\nV\x03W\x03W\x07W\u03CB\nW\fW\x0E" +
		"W\u03CE\vW\x03X\x03X\x03X\x03X\x03X\x03X\x03Y\x03Y\x03Y\x03Y\x03Z\x03" +
		"Z\x07Z\u03DC\nZ\fZ\x0EZ\u03DF\vZ\x03Z\x07Z\u03E2\nZ\fZ\x0EZ\u03E5\vZ\x03" +
		"Z\x03Z\x03[\x06[\u03EA\n[\r[\x0E[\u03EB\x03[\x07[\u03EF\n[\f[\x0E[\u03F2" +
		"\v[\x03\\\x03\\\x03\\\x03\\\x03\\\x03\\\x03\\\x03\\\x03\\\x03\\\x05\\" +
		"\u03FE\n\\\x03]\x03]\x05]\u0402\n]\x03]\x03]\x05]\u0406\n]\x03]\x03]\x05" +
		"]\u040A\n]\x05]\u040C\n]\x03^\x03^\x05^\u0410\n^\x03_\x03_\x03_\x03_\x03" +
		"_\x03_\x03`\x03`\x03a\x03a\x03a\x03a\x03b\x03b\x03b\x07b\u0421\nb\fb\x0E" +
		"b\u0424\vb\x03c\x03c\x03d\x03d\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x03" +
		"e\x03e\x03e\x03e\x03e\x03e\x05e\u0437\ne\x03e\x03e\x03e\x03e\x03e\x03" +
		"e\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x05e\u0447\ne\x03e\x03e\x03" +
		"e\x03e\x03e\x03e\x03e\x03e\x05e\u0451\ne\x03e\x03e\x03e\x03e\x03e\x03" +
		"e\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x03" +
		"e\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x03" +
		"e\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x05e\u0480\n" +
		"e\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x05e\u048E" +
		"\ne\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x05e\u0497\ne\x03e\x03e\x03e\x03" +
		"e\x03e\x03e\x03e\x05e\u04A0\ne\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x03" +
		"e\x03e\x03e\x03e\x05e\u04AD\ne\x03e\x03e\x03e\x03e\x03e\x03e\x07e\u04B5" +
		"\ne\fe\x0Ee\u04B8\ve\x03f\x03f\x03f\x03f\x03f\x03f\x03f\x03f\x03f\x03" +
		"f\x03f\x03f\x03f\x03f\x03f\x05f\u04C9\nf\x03g\x03g\x03g\x03g\x03g\x03" +
		"g\x03g\x05g\u04D2\ng\x05g\u04D4\ng\x03h\x03h\x05h\u04D8\nh\x03i\x05i\u04DB" +
		"\ni\x03i\x03i\x03i\x03j\x03j\x03j\x03j\x03k\x03k\x03k\x03k\x07k\u04E8" +
		"\nk\fk\x0Ek\u04EB\vk\x03k\x03k\x03k\x03k\x03k\x03k\x03k\x07k\u04F4\nk" +
		"\fk\x0Ek\u04F7\vk\x03k\x03k\x07k\u04FB\nk\fk\x0Ek\u04FE\vk\x05k\u0500" +
		"\nk\x03l\x03l\x05l\u0504\nl\x03m\x03m\x03m\x03m\x03n\x03n\x05n\u050C\n" +
		"n\x03n\x03n\x03n\x02\x02\x03\xC8o\x02\x02\x04\x02\x06\x02\b\x02\n\x02" +
		"\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02" +
		"\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x02" +
		"8\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02" +
		"T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02" +
		"p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02" +
		"\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02" +
		"\x9A\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02" +
		"\xAC\x02\xAE\x02\xB0\x02\xB2\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02" +
		"\xBE\x02\xC0\x02\xC2\x02\xC4\x02\xC6\x02\xC8\x02\xCA\x02\xCC\x02\xCE\x02" +
		"\xD0\x02\xD2\x02\xD4\x02\xD6\x02\xD8\x02\xDA\x02\x02\r\x03\x02\")\x04" +
		"\x02\n\n++\x04\x02++//\x03\x02\\^\x03\x0212\x03\x02EH\x03\x02IJ\x04\x02" +
		"\b\bKL\x03\x02GH\x03\x02NO\x03\x02EF\x02\u058B\x02\xDD\x03\x02\x02\x02" +
		"\x04\xED\x03\x02\x02\x02\x06\xF1\x03\x02\x02\x02\b\u0108\x03\x02\x02\x02" +
		"\n\u010A\x03\x02\x02\x02\f\u0119\x03\x02\x02\x02\x0E\u0123\x03\x02\x02" +
		"\x02\x10\u012D\x03\x02\x02\x02\x12\u0132\x03\x02\x02\x02\x14\u0135\x03" +
		"\x02\x02\x02\x16\u0140\x03\x02\x02\x02\x18\u0145\x03\x02\x02\x02\x1A\u014D" +
		"\x03\x02\x02\x02\x1C\u0159\x03\x02\x02\x02\x1E\u0162\x03\x02\x02\x02 " +
		"\u016B\x03\x02\x02\x02\"\u0172\x03\x02\x02\x02$\u017D\x03\x02\x02\x02" +
		"&\u0185\x03\x02\x02\x02(\u018E\x03\x02\x02\x02*\u019F\x03\x02\x02\x02" +
		",\u01A7\x03\x02\x02\x02.\u01BA\x03\x02\x02\x020\u01BE\x03\x02\x02\x02" +
		"2\u01C4\x03\x02\x02\x024\u01C7\x03\x02\x02\x026\u01CC\x03\x02\x02\x02" +
		"8\u01DA\x03\x02\x02\x02:\u01E3\x03\x02\x02\x02<\u01E5\x03\x02\x02\x02" +
		">\u01ED\x03\x02\x02\x02@\u01EF\x03\x02\x02\x02B\u01F8\x03\x02\x02\x02" +
		"D\u0206\x03\x02\x02\x02F\u020E\x03\x02\x02\x02H\u0215\x03\x02\x02\x02" +
		"J\u0218\x03\x02\x02\x02L\u0220\x03\x02\x02\x02N\u0225\x03\x02\x02\x02" +
		"P\u0231\x03\x02\x02\x02R\u0237\x03\x02\x02\x02T\u0241\x03\x02\x02\x02" +
		"V\u0243\x03\x02\x02\x02X\u025F\x03\x02\x02\x02Z\u0261\x03\x02\x02\x02" +
		"\\\u0263\x03\x02\x02\x02^\u0265\x03\x02\x02\x02`\u0277\x03\x02\x02\x02" +
		"b\u0279\x03\x02\x02\x02d\u0287\x03\x02\x02\x02f\u028B\x03\x02\x02\x02" +
		"h\u028D\x03\x02\x02\x02j\u029E\x03\x02\x02\x02l\u02A0\x03\x02\x02\x02" +
		"n\u02A8\x03\x02\x02\x02p\u02AE\x03\x02\x02\x02r\u02B9\x03\x02\x02\x02" +
		"t\u02BB\x03\x02\x02\x02v\u02BD\x03\x02\x02\x02x\u02D9\x03\x02\x02\x02" +
		"z\u02DB\x03\x02\x02\x02|\u02E9\x03\x02\x02\x02~\u02EB\x03\x02\x02\x02" +
		"\x80\u02ED\x03\x02\x02\x02\x82\u02F0\x03\x02\x02\x02\x84\u02F4\x03\x02" +
		"\x02\x02\x86\u02FE\x03\x02\x02\x02\x88\u0306\x03\x02\x02\x02\x8A\u030E" +
		"\x03\x02\x02\x02\x8C\u0315\x03\x02\x02\x02\x8E\u0317\x03\x02\x02\x02\x90" +
		"\u0327\x03\x02\x02\x02\x92\u032C\x03\x02\x02\x02\x94\u0335\x03\x02\x02" +
		"\x02\x96\u034C\x03\x02\x02\x02\x98\u0350\x03\x02\x02\x02\x9A\u0352\x03" +
		"\x02\x02\x02\x9C\u0358\x03\x02\x02\x02\x9E\u035A\x03\x02\x02\x02\xA0\u035D" +
		"\x03\x02\x02\x02\xA2\u036A\x03\x02\x02\x02\xA4\u036C\x03\x02\x02\x02\xA6" +
		"\u036F\x03\x02\x02\x02\xA8\u0376\x03\x02\x02\x02\xAA\u03C6\x03\x02\x02" +
		"\x02\xAC\u03C8\x03\x02\x02\x02\xAE\u03CF\x03\x02\x02\x02\xB0\u03D5\x03" +
		"\x02\x02\x02\xB2\u03D9\x03\x02\x02\x02\xB4\u03E9\x03\x02\x02\x02\xB6\u03FD" +
		"\x03\x02\x02\x02\xB8\u040B\x03\x02\x02\x02\xBA\u040F\x03\x02\x02\x02\xBC" +
		"\u0411\x03\x02\x02\x02\xBE\u0417\x03\x02\x02\x02\xC0\u0419\x03\x02\x02" +
		"\x02\xC2\u041D\x03\x02\x02\x02\xC4\u0425\x03\x02\x02\x02\xC6\u0427\x03" +
		"\x02\x02\x02\xC8\u0436\x03\x02\x02\x02\xCA\u04C8\x03\x02\x02\x02\xCC\u04D3" +
		"\x03\x02\x02\x02\xCE\u04D7\x03\x02\x02\x02\xD0\u04DA\x03\x02\x02\x02\xD2" +
		"\u04DF\x03\x02\x02\x02\xD4\u04E3\x03\x02\x02\x02\xD6\u0501\x03\x02\x02" +
		"\x02\xD8\u0505\x03\x02\x02\x02\xDA\u0509\x03\x02\x02\x02\xDC\xDE\x05\x04" +
		"\x03\x02\xDD\xDC\x03\x02\x02\x02\xDD\xDE\x03\x02\x02\x02\xDE\xE2\x03\x02" +
		"\x02\x02\xDF\xE1\x05\x06\x04\x02\xE0\xDF\x03\x02\x02\x02\xE1\xE4\x03\x02" +
		"\x02\x02\xE2\xE0\x03\x02\x02\x02\xE2\xE3\x03\x02\x02\x02\xE3\xE8\x03\x02" +
		"\x02\x02\xE4\xE2\x03\x02\x02\x02\xE5\xE7\x05\b\x05\x02\xE6\xE5\x03\x02" +
		"\x02\x02\xE7\xEA\x03\x02\x02\x02\xE8\xE6\x03\x02\x02\x02\xE8\xE9\x03\x02" +
		"\x02\x02\xE9\xEB\x03\x02\x02\x02\xEA\xE8\x03\x02\x02\x02\xEB\xEC\x07\x02" +
		"\x02\x03\xEC\x03\x03\x02\x02\x02\xED\xEE\x07\x03\x02\x02\xEE\xEF\x05z" +
		">\x02\xEF\xF0\x07\x04\x02\x02\xF0\x05\x03\x02\x02\x02\xF1\xF3\x07\x05" +
		"\x02\x02\xF2\xF4\x07\x06\x02\x02\xF3\xF2\x03\x02\x02\x02\xF3\xF4\x03\x02" +
		"\x02\x02\xF4\xF5\x03\x02\x02\x02\xF5\xF8\x05z>\x02\xF6\xF7\x07\x07\x02" +
		"\x02\xF7\xF9\x07\b\x02\x02\xF8\xF6\x03\x02\x02\x02\xF8\xF9\x03\x02\x02" +
		"\x02\xF9\xFA\x03\x02\x02\x02\xFA\xFB\x07\x04\x02\x02\xFB\x07\x03\x02\x02" +
		"\x02\xFC\xFE\x05\x10\t\x02\xFD\xFC\x03\x02\x02\x02\xFE\u0101\x03\x02\x02" +
		"\x02\xFF\xFD\x03\x02\x02\x02\xFF\u0100\x03\x02\x02\x02\u0100\u0105\x03" +
		"\x02\x02\x02\u0101\xFF\x03\x02\x02\x02\u0102\u0106\x05\n\x06\x02\u0103" +
		"\u0106\x05\x0E\b\x02\u0104\u0106\x05\f\x07\x02\u0105\u0102\x03\x02\x02" +
		"\x02\u0105\u0103\x03\x02\x02\x02\u0105\u0104\x03\x02\x02\x02\u0106\u0109" +
		"\x03\x02\x02\x02\u0107\u0109\x07\x04\x02\x02\u0108\xFF\x03\x02\x02\x02" +
		"\u0108\u0107\x03\x02\x02\x02\u0109\t\x03\x02\x02\x02\u010A\u010B\x07\t" +
		"\x02\x02\u010B\u010D\x07d\x02\x02\u010C\u010E\x05\x14\v\x02\u010D\u010C" +
		"\x03\x02\x02\x02\u010D\u010E\x03\x02\x02\x02\u010E\u0111\x03\x02\x02\x02" +
		"\u010F\u0110\x07\n\x02\x02\u0110\u0112\x05`1\x02\u0111\u010F\x03\x02\x02" +
		"\x02\u0111\u0112\x03\x02\x02\x02\u0112\u0115\x03\x02\x02\x02\u0113\u0114" +
		"\x07\v\x02\x02\u0114\u0116\x05$\x13\x02\u0115\u0113\x03\x02\x02\x02\u0115" +
		"\u0116\x03\x02\x02\x02\u0116\u0117\x03\x02\x02\x02\u0117\u0118\x05&\x14" +
		"\x02\u0118\v\x03\x02\x02\x02\u0119\u011A\x07b\x02\x02\u011A\u011D\x07" +
		"d\x02\x02\u011B\u011C\x07\v\x02\x02\u011C\u011E\x05$\x13\x02\u011D\u011B" +
		"\x03\x02\x02\x02\u011D\u011E\x03\x02\x02\x02\u011E\u011F\x03\x02\x02\x02" +
		"\u011F\u0120\x05\x1A\x0E\x02\u0120\r\x03\x02\x02\x02\u0121\u0124\x05\"" +
		"\x12\x02\u0122\u0124\x05\x90I\x02\u0123\u0121\x03\x02\x02\x02\u0123\u0122" +
		"\x03\x02\x02\x02\u0124\x0F\x03\x02\x02\x02\u0125\u012E\x05\x84C\x02\u0126" +
		"\u012E\x07\f\x02\x02\u0127\u012E\x07\r\x02\x02\u0128\u012E\x07\x0E\x02" +
		"\x02\u0129\u012E\x07\x0F\x02\x02\u012A\u012E\x07\x06\x02\x02\u012B\u012E" +
		"\x07\x10\x02\x02\u012C\u012E\x07\x11\x02\x02\u012D\u0125\x03\x02\x02\x02" +
		"\u012D\u0126\x03\x02\x02\x02\u012D\u0127\x03\x02\x02\x02\u012D\u0128\x03" +
		"\x02\x02\x02\u012D\u0129\x03\x02\x02\x02\u012D\u012A\x03\x02\x02\x02\u012D" +
		"\u012B\x03\x02\x02\x02\u012D\u012C\x03\x02\x02\x02\u012E\x11\x03\x02\x02" +
		"\x02\u012F\u0131\x05X-\x02\u0130\u012F\x03\x02\x02\x02\u0131\u0134\x03" +
		"\x02\x02\x02\u0132\u0130\x03\x02\x02\x02\u0132\u0133\x03\x02\x02\x02\u0133" +
		"\x13\x03\x02\x02\x02\u0134\u0132\x03\x02\x02\x02\u0135\u0136\x07\x12\x02" +
		"\x02\u0136\u013B\x05\x16\f\x02\u0137\u0138\x07\x13\x02\x02\u0138\u013A" +
		"\x05\x16\f\x02\u0139\u0137\x03\x02\x02\x02\u013A\u013D\x03\x02\x02\x02" +
		"\u013B\u0139\x03\x02\x02\x02\u013B\u013C\x03\x02\x02\x02\u013C\u013E\x03" +
		"\x02\x02\x02\u013D\u013B\x03\x02\x02\x02\u013E\u013F\x07\x14\x02\x02\u013F" +
		"\x15\x03\x02\x02\x02\u0140\u0143\x07d\x02\x02\u0141\u0142\x07\n\x02\x02" +
		"\u0142\u0144\x05\x18\r\x02\u0143\u0141\x03\x02\x02\x02\u0143\u0144\x03" +
		"\x02\x02\x02\u0144\x17\x03\x02\x02\x02\u0145\u014A\x05`1\x02\u0146\u0147" +
		"\x07\x15\x02\x02\u0147\u0149\x05`1\x02\u0148\u0146\x03\x02\x02\x02\u0149" +
		"\u014C\x03\x02\x02\x02\u014A\u0148\x03\x02\x02\x02\u014A\u014B\x03\x02" +
		"\x02\x02\u014B\x19\x03\x02\x02\x02\u014C\u014A\x03\x02\x02\x02\u014D\u014F" +
		"\x07\x16\x02\x02\u014E\u0150\x05\x1C\x0F\x02\u014F\u014E\x03\x02\x02\x02" +
		"\u014F\u0150\x03\x02\x02\x02\u0150\u0152\x03\x02\x02\x02\u0151\u0153\x07" +
		"\x13\x02\x02\u0152\u0151\x03\x02\x02\x02\u0152\u0153\x03\x02\x02\x02\u0153" +
		"\u0155\x03\x02\x02\x02\u0154\u0156\x05 \x11\x02\u0155\u0154\x03\x02\x02" +
		"\x02\u0155\u0156\x03\x02\x02\x02\u0156\u0157\x03\x02\x02\x02\u0157\u0158" +
		"\x07\x17\x02\x02\u0158\x1B\x03\x02\x02\x02\u0159\u015E\x05\x1E\x10\x02" +
		"\u015A\u015B\x07\x13\x02\x02\u015B\u015D\x05\x1E\x10\x02\u015C\u015A\x03" +
		"\x02\x02\x02\u015D\u0160\x03\x02\x02\x02\u015E\u015C\x03\x02\x02\x02\u015E" +
		"\u015F\x03\x02\x02\x02\u015F\x1D\x03\x02\x02\x02\u0160\u015E\x03\x02\x02" +
		"\x02\u0161\u0163\x05\x82B\x02\u0162\u0161\x03\x02\x02\x02\u0162\u0163" +
		"\x03\x02\x02\x02\u0163\u0164\x03\x02\x02\x02\u0164\u0166\x07d\x02\x02" +
		"\u0165\u0167\x05\xDAn\x02\u0166\u0165\x03\x02\x02\x02\u0166\u0167\x03" +
		"\x02\x02\x02\u0167\u0169\x03\x02\x02\x02\u0168\u016A\x05&\x14\x02\u0169" +
		"\u0168\x03\x02\x02\x02\u0169\u016A\x03\x02\x02\x02\u016A\x1F\x03\x02\x02" +
		"\x02\u016B\u016F\x07\x04\x02\x02\u016C\u016E\x05*\x16\x02\u016D\u016C" +
		"\x03\x02\x02\x02\u016E\u0171\x03\x02\x02\x02\u016F\u016D\x03\x02\x02\x02" +
		"\u016F\u0170\x03\x02\x02\x02\u0170!\x03\x02\x02\x02\u0171\u016F\x03\x02" +
		"\x02\x02\u0172\u0173\x07\x18\x02\x02\u0173\u0175\x07d\x02\x02\u0174\u0176" +
		"\x05\x14\v\x02\u0175\u0174\x03\x02\x02\x02\u0175\u0176\x03\x02\x02\x02" +
		"\u0176\u0179\x03\x02\x02\x02\u0177\u0178\x07\n\x02\x02\u0178\u017A\x05" +
		"$\x13\x02\u0179\u0177\x03\x02\x02\x02\u0179\u017A\x03\x02\x02\x02\u017A" +
		"\u017B\x03\x02\x02\x02\u017B\u017C\x05(\x15\x02\u017C#\x03\x02\x02\x02" +
		"\u017D\u0182\x05`1\x02\u017E\u017F\x07\x13\x02\x02\u017F\u0181\x05`1\x02" +
		"\u0180\u017E\x03\x02\x02\x02\u0181\u0184\x03\x02\x02\x02\u0182\u0180\x03" +
		"\x02\x02\x02\u0182\u0183\x03\x02\x02\x02\u0183%\x03\x02\x02\x02\u0184" +
		"\u0182\x03\x02\x02\x02\u0185\u0189\x07\x16\x02\x02\u0186\u0188\x05*\x16" +
		"\x02\u0187\u0186\x03\x02\x02\x02\u0188\u018B\x03\x02\x02\x02\u0189\u0187" +
		"\x03\x02\x02\x02\u0189\u018A\x03\x02\x02\x02\u018A\u018C\x03\x02\x02\x02" +
		"\u018B\u0189\x03\x02\x02\x02\u018C\u018D\x07\x17\x02\x02\u018D\'\x03\x02";
	private static readonly _serializedATNSegment1: string =
		"\x02\x02\u018E\u0192\x07\x16\x02\x02\u018F\u0191\x058\x1D\x02\u0190\u018F" +
		"\x03\x02\x02\x02\u0191\u0194\x03\x02\x02\x02\u0192\u0190\x03\x02\x02\x02" +
		"\u0192\u0193\x03\x02\x02\x02\u0193\u0195\x03\x02\x02\x02\u0194\u0192\x03" +
		"\x02\x02\x02\u0195\u0196\x07\x17\x02\x02\u0196)\x03\x02\x02\x02\u0197" +
		"\u01A0\x07\x04\x02\x02\u0198\u019A\x07\x06\x02\x02\u0199\u0198\x03\x02" +
		"\x02\x02\u0199\u019A\x03\x02\x02\x02\u019A\u019B\x03\x02\x02\x02\u019B" +
		"\u01A0\x05\xA0Q\x02\u019C\u019D\x05\x12\n\x02\u019D\u019E\x05,\x17\x02" +
		"\u019E\u01A0\x03\x02\x02\x02\u019F\u0197\x03\x02\x02\x02\u019F\u0199\x03" +
		"\x02\x02\x02\u019F\u019C\x03\x02\x02\x02\u01A0+\x03\x02\x02\x02\u01A1" +
		"\u01A8\x052\x1A\x02\u01A2\u01A8\x05.\x18\x02\u01A3\u01A8\x054\x1B\x02" +
		"\u01A4\u01A8\x056\x1C\x02\u01A5\u01A8\x05\x0E\b\x02\u01A6\u01A8\x05\n" +
		"\x06\x02\u01A7\u01A1\x03\x02\x02\x02\u01A7\u01A2\x03\x02\x02\x02\u01A7" +
		"\u01A3\x03\x02\x02\x02\u01A7\u01A4\x03\x02\x02\x02\u01A7\u01A5\x03\x02" +
		"\x02\x02\u01A7\u01A6\x03\x02\x02\x02\u01A8-\x03\x02\x02\x02\u01A9\u01AA" +
		"\x05`1\x02\u01AA\u01AB\x07d\x02\x02\u01AB\u01B0\x05n8\x02\u01AC\u01AD" +
		"\x07\x19\x02\x02\u01AD\u01AF\x07\x1A\x02\x02\u01AE\u01AC\x03\x02\x02\x02" +
		"\u01AF\u01B2\x03\x02\x02\x02\u01B0\u01AE\x03\x02\x02\x02\u01B0\u01B1\x03" +
		"\x02\x02\x02\u01B1\u01B3\x03\x02\x02\x02\u01B2\u01B0\x03\x02\x02\x02\u01B3" +
		"\u01B4\x050\x19\x02\u01B4\u01BB\x03\x02\x02\x02\u01B5\u01B6\x07\x1B\x02" +
		"\x02\u01B6\u01B7\x07d\x02\x02\u01B7\u01B8\x05n8\x02\u01B8\u01B9\x050\x19" +
		"\x02\u01B9\u01BB\x03\x02\x02\x02\u01BA\u01A9\x03\x02\x02\x02\u01BA\u01B5" +
		"\x03\x02\x02\x02\u01BB/\x03\x02\x02\x02\u01BC\u01BD\x07\x1C\x02\x02\u01BD" +
		"\u01BF\x05l7\x02\u01BE\u01BC\x03\x02\x02\x02\u01BE\u01BF\x03\x02\x02\x02" +
		"\u01BF\u01C2\x03\x02\x02\x02\u01C0\u01C3\x05t;\x02\u01C1\u01C3\x07\x04" +
		"\x02\x02\u01C2\u01C0\x03\x02\x02\x02\u01C2\u01C1\x03\x02\x02\x02\u01C3" +
		"1\x03\x02\x02\x02\u01C4\u01C5\x05\x14\v\x02\u01C5\u01C6\x05.\x18\x02\u01C6" +
		"3\x03\x02\x02\x02\u01C7\u01C8\x05`1\x02\u01C8\u01C9\x05J&\x02\u01C9\u01CA" +
		"\x07\x04\x02\x02\u01CA5\x03\x02\x02\x02\u01CB\u01CD\x05\x14\v\x02\u01CC" +
		"\u01CB\x03\x02\x02\x02\u01CC\u01CD\x03\x02\x02\x02\u01CD\u01CE\x03\x02" +
		"\x02\x02\u01CE\u01CF\x07d\x02\x02\u01CF\u01D2\x05n8\x02\u01D0\u01D1\x07" +
		"\x1C\x02\x02\u01D1\u01D3\x05l7\x02\u01D2\u01D0\x03\x02\x02\x02\u01D2\u01D3" +
		"\x03\x02\x02\x02\u01D3\u01D4\x03\x02\x02\x02\u01D4\u01D5\x05v<\x02\u01D5" +
		"7\x03\x02\x02\x02\u01D6\u01D7\x05\x12\n\x02\u01D7\u01D8\x05:\x1E\x02\u01D8" +
		"\u01DB\x03\x02\x02\x02\u01D9\u01DB\x07\x04\x02\x02\u01DA\u01D6\x03\x02" +
		"\x02\x02\u01DA\u01D9\x03\x02\x02\x02\u01DB9\x03\x02\x02\x02\u01DC\u01E4" +
		"\x05<\x1F\x02\u01DD\u01E4\x05D#\x02\u01DE\u01DF\x07\x1B\x02\x02\u01DF" +
		"\u01E0\x07d\x02\x02\u01E0\u01E4\x05F$\x02\u01E1\u01E4\x05\x0E\b\x02\u01E2" +
		"\u01E4\x05\n\x06\x02\u01E3\u01DC\x03\x02\x02\x02\u01E3\u01DD\x03\x02\x02" +
		"\x02\u01E3\u01DE\x03\x02\x02\x02\u01E3\u01E1\x03\x02\x02\x02\u01E3\u01E2" +
		"\x03\x02\x02\x02\u01E4;\x03\x02\x02\x02\u01E5\u01E6\x05`1\x02\u01E6\u01E7" +
		"\x07d\x02\x02\u01E7\u01E8\x05> \x02\u01E8=\x03\x02\x02\x02\u01E9\u01EA" +
		"\x05N(\x02\u01EA\u01EB\x07\x04\x02\x02\u01EB\u01EE\x03\x02\x02\x02\u01EC" +
		"\u01EE\x05B\"\x02\u01ED\u01E9\x03\x02\x02\x02\u01ED\u01EC\x03\x02\x02" +
		"\x02\u01EE?\x03\x02\x02\x02\u01EF\u01F2\x05n8\x02\u01F0\u01F1\x07\x1C" +
		"\x02\x02\u01F1\u01F3\x05l7\x02\u01F2\u01F0\x03\x02\x02\x02\u01F2\u01F3" +
		"\x03\x02\x02\x02\u01F3\u01F6\x03\x02\x02\x02\u01F4\u01F7\x05t;\x02\u01F5" +
		"\u01F7\x07\x04\x02\x02\u01F6\u01F4\x03\x02\x02\x02\u01F6\u01F5\x03\x02" +
		"\x02\x02\u01F7A\x03\x02\x02\x02\u01F8\u01FD\x05n8\x02\u01F9\u01FA\x07" +
		"\x19\x02\x02\u01FA\u01FC\x07\x1A\x02\x02\u01FB\u01F9\x03\x02\x02\x02\u01FC" +
		"\u01FF\x03\x02\x02\x02\u01FD\u01FB\x03\x02\x02\x02\u01FD\u01FE\x03\x02" +
		"\x02\x02\u01FE\u0202\x03\x02\x02\x02\u01FF\u01FD\x03\x02\x02\x02\u0200" +
		"\u0201\x07\x1C\x02\x02\u0201\u0203\x05l7\x02\u0202\u0200\x03\x02\x02\x02" +
		"\u0202\u0203\x03\x02\x02\x02\u0203\u0204\x03\x02\x02\x02\u0204\u0205\x07" +
		"\x04\x02\x02\u0205C\x03\x02\x02\x02\u0206\u0209\x05\x14\v\x02\u0207\u020A" +
		"\x05`1\x02\u0208\u020A\x07\x1B\x02\x02\u0209\u0207\x03\x02\x02\x02\u0209" +
		"\u0208\x03\x02\x02\x02\u020A\u020B\x03\x02\x02\x02\u020B\u020C\x07d\x02" +
		"\x02\u020C\u020D\x05B\"\x02\u020DE\x03\x02\x02\x02\u020E\u0211\x05n8\x02" +
		"\u020F\u0210\x07\x1C\x02\x02\u0210\u0212\x05l7\x02\u0211\u020F\x03\x02" +
		"\x02\x02\u0211\u0212\x03\x02\x02\x02\u0212\u0213\x03\x02\x02\x02\u0213" +
		"\u0214\x07\x04\x02\x02\u0214G\x03\x02\x02\x02\u0215\u0216\x07d\x02\x02" +
		"\u0216\u0217\x05P)\x02\u0217I\x03\x02\x02\x02\u0218\u021D\x05L\'\x02\u0219" +
		"\u021A\x07\x13\x02\x02\u021A\u021C\x05L\'\x02\u021B\u0219\x03\x02\x02" +
		"\x02\u021C\u021F\x03\x02\x02\x02\u021D\u021B\x03\x02\x02\x02\u021D\u021E" +
		"\x03\x02\x02\x02\u021EK\x03\x02\x02\x02\u021F\u021D\x03\x02\x02\x02\u0220" +
		"\u0223\x05R*\x02\u0221\u0222\x07\x1D\x02\x02\u0222\u0224\x05T+\x02\u0223" +
		"\u0221\x03\x02\x02\x02\u0223\u0224\x03\x02\x02\x02\u0224M\x03\x02\x02" +
		"\x02\u0225\u022A\x05P)\x02\u0226\u0227\x07\x13\x02\x02\u0227\u0229\x05" +
		"H%\x02\u0228\u0226\x03\x02\x02\x02\u0229\u022C\x03\x02\x02\x02\u022A\u0228" +
		"\x03\x02\x02\x02\u022A\u022B\x03\x02\x02\x02\u022BO\x03\x02\x02\x02\u022C" +
		"\u022A\x03\x02\x02\x02\u022D\u022E\x07\x19\x02\x02\u022E\u0230\x07\x1A" +
		"\x02\x02\u022F\u022D\x03\x02\x02\x02\u0230\u0233\x03\x02\x02\x02\u0231" +
		"\u022F\x03\x02\x02\x02\u0231\u0232\x03\x02\x02\x02\u0232\u0234\x03\x02" +
		"\x02\x02\u0233\u0231\x03\x02\x02\x02\u0234\u0235\x07\x1D\x02\x02\u0235" +
		"\u0236\x05T+\x02\u0236Q\x03\x02\x02\x02\u0237\u023C\x07d\x02\x02\u0238" +
		"\u0239\x07\x19\x02\x02\u0239\u023B\x07\x1A\x02\x02\u023A\u0238\x03\x02" +
		"\x02\x02\u023B\u023E\x03\x02\x02\x02\u023C\u023A\x03\x02\x02\x02\u023C" +
		"\u023D\x03\x02\x02\x02\u023DS\x03\x02\x02\x02\u023E\u023C\x03\x02\x02" +
		"\x02\u023F\u0242\x05V,\x02\u0240\u0242\x05\xC8e\x02\u0241\u023F\x03\x02" +
		"\x02\x02\u0241\u0240\x03\x02\x02\x02\u0242U\x03\x02\x02\x02\u0243\u024F" +
		"\x07\x16\x02\x02\u0244\u0249\x05T+\x02\u0245\u0246\x07\x13\x02\x02\u0246" +
		"\u0248\x05T+\x02\u0247\u0245\x03\x02\x02\x02\u0248\u024B\x03\x02\x02\x02" +
		"\u0249\u0247\x03\x02\x02\x02\u0249\u024A\x03\x02\x02\x02\u024A\u024D\x03" +
		"\x02\x02\x02\u024B\u0249\x03\x02\x02\x02\u024C\u024E\x07\x13\x02\x02\u024D" +
		"\u024C\x03\x02\x02\x02\u024D\u024E\x03\x02\x02\x02\u024E\u0250\x03\x02" +
		"\x02\x02\u024F\u0244\x03\x02\x02\x02\u024F\u0250\x03\x02\x02\x02\u0250" +
		"\u0251\x03\x02\x02\x02\u0251\u0252\x07\x17\x02\x02\u0252W\x03\x02\x02" +
		"\x02\u0253\u0260\x05\x84C\x02\u0254\u0260\x07\f\x02\x02\u0255\u0260\x07" +
		"\r\x02\x02\u0256\u0260\x07\x0E\x02\x02\u0257\u0260\x07\x06\x02\x02\u0258" +
		"\u0260\x07\x0F\x02\x02\u0259\u0260\x07\x10\x02\x02\u025A\u0260\x07\x1E" +
		"\x02\x02\u025B\u0260\x07\x1F\x02\x02\u025C\u0260\x07 \x02\x02\u025D\u0260" +
		"\x07!\x02\x02\u025E\u0260\x07\x11\x02\x02\u025F\u0253\x03\x02\x02\x02" +
		"\u025F\u0254\x03\x02\x02\x02\u025F\u0255\x03\x02\x02\x02\u025F\u0256\x03" +
		"\x02\x02\x02\u025F\u0257\x03\x02\x02\x02\u025F\u0258\x03\x02\x02\x02\u025F" +
		"\u0259\x03\x02\x02\x02\u025F\u025A\x03\x02\x02\x02\u025F\u025B\x03\x02" +
		"\x02\x02\u025F\u025C\x03\x02\x02\x02\u025F\u025D\x03\x02\x02\x02\u025F" +
		"\u025E\x03\x02\x02\x02\u0260Y\x03\x02\x02\x02\u0261\u0262\x05z>\x02\u0262" +
		"[\x03\x02\x02\x02\u0263\u0264\x07d\x02\x02\u0264]\x03\x02\x02\x02\u0265" +
		"\u0266\x05z>\x02\u0266_\x03\x02\x02\x02\u0267\u026C\x05b2\x02\u0268\u0269" +
		"\x07\x19\x02\x02\u0269\u026B\x07\x1A\x02\x02\u026A\u0268\x03\x02\x02\x02" +
		"\u026B\u026E\x03\x02\x02\x02\u026C\u026A\x03\x02\x02\x02\u026C\u026D\x03" +
		"\x02\x02\x02\u026D\u0278\x03\x02\x02\x02\u026E\u026C\x03\x02\x02\x02\u026F" +
		"\u0274\x05d3\x02\u0270\u0271\x07\x19\x02\x02\u0271\u0273\x07\x1A\x02\x02" +
		"\u0272\u0270\x03\x02\x02\x02\u0273\u0276\x03\x02\x02\x02\u0274\u0272\x03" +
		"\x02\x02\x02\u0274\u0275\x03\x02\x02\x02\u0275\u0278\x03\x02\x02\x02\u0276" +
		"\u0274\x03\x02\x02\x02\u0277\u0267\x03\x02\x02\x02\u0277\u026F\x03\x02" +
		"\x02\x02\u0278a\x03\x02\x02\x02\u0279\u027B\x07d\x02\x02\u027A\u027C\x05" +
		"h5\x02\u027B\u027A\x03\x02\x02\x02\u027B\u027C\x03\x02\x02\x02\u027C\u0284" +
		"\x03\x02\x02\x02\u027D\u027E\x07\x07\x02\x02\u027E\u0280\x07d\x02\x02" +
		"\u027F\u0281\x05h5\x02\u0280\u027F\x03\x02\x02\x02\u0280\u0281\x03\x02" +
		"\x02\x02\u0281\u0283\x03\x02\x02\x02\u0282\u027D\x03\x02\x02\x02\u0283" +
		"\u0286\x03\x02\x02\x02\u0284\u0282\x03\x02\x02\x02\u0284\u0285\x03\x02" +
		"\x02\x02\u0285c\x03\x02\x02\x02\u0286\u0284\x03\x02\x02\x02\u0287\u0288" +
		"\t\x02\x02\x02\u0288e\x03\x02\x02\x02\u0289\u028C\x07\x10\x02\x02\u028A" +
		"\u028C\x05\x84C\x02\u028B\u0289\x03\x02\x02\x02\u028B\u028A\x03\x02\x02" +
		"\x02\u028Cg\x03\x02\x02\x02\u028D\u028E\x07\x12\x02\x02\u028E\u0293\x05" +
		"j6\x02\u028F\u0290\x07\x13\x02\x02\u0290\u0292\x05j6\x02\u0291\u028F\x03" +
		"\x02\x02\x02\u0292\u0295\x03\x02\x02\x02\u0293\u0291\x03\x02\x02\x02\u0293" +
		"\u0294\x03\x02\x02\x02\u0294\u0296\x03\x02\x02\x02\u0295\u0293\x03\x02" +
		"\x02\x02\u0296\u0297\x07\x14\x02\x02\u0297i\x03\x02\x02\x02\u0298\u029F" +
		"\x05`1\x02\u0299\u029C\x07*\x02\x02\u029A\u029B\t\x03\x02\x02\u029B\u029D" +
		"\x05`1\x02\u029C\u029A\x03\x02\x02\x02\u029C\u029D\x03\x02\x02\x02\u029D" +
		"\u029F\x03\x02\x02\x02\u029E\u0298\x03\x02\x02\x02\u029E\u0299\x03\x02" +
		"\x02\x02\u029Fk\x03\x02\x02\x02\u02A0\u02A5\x05z>\x02\u02A1\u02A2\x07" +
		"\x13\x02\x02\u02A2\u02A4\x05z>\x02\u02A3\u02A1\x03\x02\x02\x02\u02A4\u02A7" +
		"\x03\x02\x02\x02\u02A5\u02A3\x03\x02\x02\x02\u02A5\u02A6\x03\x02\x02\x02" +
		"\u02A6m\x03\x02\x02\x02\u02A7\u02A5\x03\x02\x02\x02\u02A8\u02AA\x07,\x02" +
		"\x02\u02A9\u02AB\x05p9\x02\u02AA\u02A9\x03\x02\x02\x02\u02AA\u02AB\x03" +
		"\x02\x02\x02\u02AB\u02AC\x03\x02\x02\x02\u02AC\u02AD\x07-\x02\x02\u02AD" +
		"o\x03\x02\x02\x02\u02AE\u02AF\x05\xA8U\x02\u02AF\u02B0\x05`1\x02\u02B0" +
		"\u02B1\x05r:\x02\u02B1q\x03\x02\x02\x02\u02B2\u02B5\x05R*\x02\u02B3\u02B4" +
		"\x07\x13\x02\x02\u02B4\u02B6\x05p9\x02\u02B5\u02B3\x03\x02\x02\x02\u02B5" +
		"\u02B6\x03\x02\x02\x02\u02B6\u02BA\x03\x02\x02\x02\u02B7\u02B8\x07.\x02" +
		"\x02\u02B8\u02BA\x05R*\x02\u02B9\u02B2\x03\x02\x02\x02\u02B9\u02B7\x03" +
		"\x02\x02\x02\u02BAs\x03\x02\x02\x02\u02BB\u02BC\x05\xA0Q\x02\u02BCu\x03" +
		"\x02\x02\x02\u02BD\u02BF\x07\x16\x02\x02\u02BE\u02C0\x05x=\x02\u02BF\u02BE" +
		"\x03\x02\x02\x02\u02BF\u02C0\x03\x02\x02\x02\u02C0\u02C4\x03\x02\x02\x02" +
		"\u02C1\u02C3\x05\xA2R\x02\u02C2\u02C1\x03\x02\x02\x02\u02C3\u02C6\x03" +
		"\x02\x02\x02\u02C4\u02C2\x03\x02\x02\x02\u02C4\u02C5\x03\x02\x02\x02\u02C5" +
		"\u02C7\x03\x02\x02\x02\u02C6\u02C4\x03\x02\x02\x02\u02C7\u02C8\x07\x17" +
		"\x02\x02\u02C8w\x03\x02\x02\x02\u02C9\u02CB\x05\xD8m\x02\u02CA\u02C9\x03" +
		"\x02\x02\x02\u02CA\u02CB\x03\x02\x02\x02\u02CB\u02CC\x03\x02\x02\x02\u02CC" +
		"\u02CD\t\x04\x02\x02\u02CD\u02CE\x05\xDAn\x02\u02CE\u02CF\x07\x04\x02" +
		"\x02\u02CF\u02DA\x03\x02\x02\x02\u02D0\u02D1\x05\xCAf\x02\u02D1\u02D3" +
		"\x07\x07\x02\x02\u02D2\u02D4\x05\xD8m\x02\u02D3\u02D2\x03\x02\x02\x02" +
		"\u02D3\u02D4\x03\x02\x02\x02\u02D4\u02D5\x03\x02\x02\x02\u02D5\u02D6\x07" +
		"+\x02\x02\u02D6\u02D7\x05\xDAn\x02\u02D7\u02D8\x07\x04\x02\x02\u02D8\u02DA" +
		"\x03\x02\x02\x02\u02D9\u02CA\x03\x02\x02\x02\u02D9\u02D0\x03\x02\x02\x02" +
		"\u02DAy\x03\x02\x02\x02\u02DB\u02E0\x07d\x02\x02\u02DC\u02DD\x07\x07\x02" +
		"\x02\u02DD\u02DF\x07d\x02\x02\u02DE\u02DC\x03\x02\x02\x02\u02DF\u02E2" +
		"\x03\x02\x02\x02\u02E0\u02DE\x03\x02\x02\x02\u02E0\u02E1\x03\x02\x02\x02" +
		"\u02E1{\x03\x02\x02\x02\u02E2\u02E0\x03\x02\x02\x02\u02E3\u02EA\x05~@" +
		"\x02\u02E4\u02EA\x07_\x02\x02\u02E5\u02EA\x07`\x02\x02\u02E6\u02EA\x07" +
		"a\x02\x02\u02E7\u02EA\x05\x80A\x02\u02E8\u02EA\x070\x02\x02\u02E9\u02E3" +
		"\x03\x02\x02\x02\u02E9\u02E4\x03\x02\x02\x02\u02E9\u02E5\x03\x02\x02\x02" +
		"\u02E9\u02E6\x03\x02\x02\x02\u02E9\u02E7\x03\x02\x02\x02\u02E9\u02E8\x03" +
		"\x02\x02\x02\u02EA}\x03\x02\x02\x02\u02EB\u02EC\t\x05\x02\x02\u02EC\x7F" +
		"\x03\x02\x02\x02\u02ED\u02EE\t\x06\x02\x02\u02EE\x81\x03\x02\x02\x02\u02EF" +
		"\u02F1\x05\x84C\x02\u02F0\u02EF\x03\x02\x02\x02\u02F1\u02F2\x03\x02\x02" +
		"\x02\u02F2\u02F0\x03\x02\x02\x02\u02F2\u02F3\x03\x02\x02\x02\u02F3\x83" +
		"\x03\x02\x02\x02\u02F4\u02F5\x073\x02\x02\u02F5\u02FC\x05\x86D\x02\u02F6" +
		"\u02F9\x07,\x02\x02\u02F7\u02FA\x05\x88E\x02\u02F8\u02FA\x05\x8CG\x02" +
		"\u02F9\u02F7\x03\x02\x02\x02\u02F9\u02F8\x03\x02\x02\x02\u02F9\u02FA\x03" +
		"\x02\x02\x02\u02FA\u02FB\x03\x02\x02\x02\u02FB\u02FD\x07-\x02\x02\u02FC" +
		"\u02F6\x03\x02\x02\x02\u02FC\u02FD\x03\x02\x02\x02\u02FD\x85\x03\x02\x02" +
		"\x02\u02FE\u0303\x07d\x02\x02\u02FF\u0300\x07\x07\x02\x02\u0300\u0302" +
		"\x07d\x02\x02\u0301\u02FF\x03\x02\x02\x02\u0302\u0305\x03\x02\x02\x02" +
		"\u0303\u0301\x03\x02\x02\x02\u0303\u0304\x03\x02\x02\x02\u0304\x87\x03" +
		"\x02\x02\x02\u0305\u0303\x03\x02\x02\x02\u0306\u030B\x05\x8AF\x02\u0307" +
		"\u0308\x07\x13\x02\x02\u0308\u030A\x05\x8AF\x02\u0309\u0307\x03\x02\x02" +
		"\x02\u030A\u030D\x03\x02\x02\x02\u030B\u0309\x03\x02\x02\x02\u030B\u030C" +
		"\x03\x02\x02\x02\u030C\x89\x03\x02\x02\x02\u030D\u030B\x03\x02\x02\x02" +
		"\u030E\u030F\x07d\x02\x02\u030F\u0310\x07\x1D\x02\x02\u0310\u0311\x05" +
		"\x8CG\x02\u0311\x8B\x03\x02\x02\x02\u0312\u0316\x05\xC8e\x02\u0313\u0316" +
		"\x05\x84C\x02\u0314\u0316\x05\x8EH\x02\u0315\u0312\x03\x02\x02\x02\u0315" +
		"\u0313\x03\x02\x02\x02\u0315\u0314\x03\x02\x02\x02\u0316\x8D\x03\x02\x02" +
		"\x02\u0317\u0320\x07\x16\x02\x02\u0318\u031D\x05\x8CG\x02\u0319\u031A" +
		"\x07\x13\x02\x02\u031A\u031C\x05\x8CG\x02\u031B\u0319\x03\x02\x02\x02" +
		"\u031C\u031F\x03\x02\x02\x02\u031D\u031B\x03\x02\x02\x02\u031D\u031E\x03" +
		"\x02\x02\x02\u031E\u0321\x03\x02\x02\x02\u031F\u031D\x03\x02\x02\x02\u0320" +
		"\u0318\x03\x02\x02\x02\u0320\u0321\x03\x02\x02\x02\u0321\u0323\x03\x02" +
		"\x02\x02\u0322\u0324\x07\x13\x02\x02\u0323\u0322\x03\x02\x02\x02\u0323" +
		"\u0324\x03\x02\x02\x02\u0324\u0325\x03\x02\x02\x02\u0325\u0326\x07\x17" +
		"\x02\x02\u0326\x8F\x03\x02\x02\x02\u0327\u0328\x073\x02\x02\u0328\u0329" +
		"\x07\x18\x02\x02\u0329\u032A\x07d\x02\x02\u032A\u032B\x05\x92J\x02\u032B" +
		"\x91\x03\x02\x02\x02\u032C\u0330\x07\x16\x02\x02\u032D\u032F\x05\x94K" +
		"\x02\u032E\u032D\x03\x02\x02\x02\u032F\u0332\x03\x02\x02\x02\u0330\u032E" +
		"\x03\x02\x02\x02\u0330\u0331\x03\x02\x02\x02\u0331\u0333\x03\x02\x02\x02" +
		"\u0332\u0330\x03\x02\x02\x02\u0333\u0334\x07\x17\x02\x02\u0334\x93\x03" +
		"\x02\x02\x02\u0335\u0336\x05\x12\n\x02\u0336\u0337\x05\x96L\x02\u0337" +
		"\x95\x03\x02\x02\x02\u0338\u0339\x05`1\x02\u0339\u033A\x05\x98M\x02\u033A" +
		"\u033B\x07\x04\x02\x02\u033B\u034D\x03\x02\x02\x02\u033C\u033E\x05\n\x06" +
		"\x02\u033D\u033F\x07\x04\x02\x02\u033E\u033D\x03\x02\x02\x02\u033E\u033F" +
		"\x03\x02\x02\x02\u033F\u034D\x03\x02\x02\x02\u0340\u0342\x05\"\x12\x02" +
		"\u0341\u0343\x07\x04\x02\x02\u0342\u0341\x03\x02\x02\x02\u0342\u0343\x03" +
		"\x02\x02\x02\u0343\u034D\x03\x02\x02\x02\u0344\u0346\x05\f\x07\x02\u0345" +
		"\u0347\x07\x04\x02\x02\u0346\u0345\x03\x02\x02\x02\u0346\u0347\x03\x02" +
		"\x02\x02\u0347\u034D\x03\x02\x02\x02\u0348\u034A\x05\x90I\x02\u0349\u034B" +
		"\x07\x04\x02\x02\u034A\u0349\x03\x02\x02\x02\u034A\u034B\x03\x02\x02\x02" +
		"\u034B\u034D\x03\x02\x02\x02\u034C\u0338\x03\x02\x02\x02\u034C\u033C\x03" +
		"\x02\x02\x02\u034C\u0340\x03\x02\x02\x02\u034C\u0344\x03\x02\x02\x02\u034C" +
		"\u0348\x03\x02\x02\x02\u034D\x97\x03\x02\x02\x02\u034E\u0351\x05\x9AN" +
		"\x02\u034F\u0351\x05\x9CO\x02\u0350\u034E\x03\x02\x02\x02\u0350\u034F" +
		"\x03\x02\x02\x02\u0351\x99\x03\x02\x02\x02\u0352\u0353\x07d\x02\x02\u0353" +
		"\u0354\x07,\x02\x02\u0354\u0356\x07-\x02\x02\u0355\u0357\x05\x9EP\x02" +
		"\u0356\u0355\x03\x02\x02\x02\u0356\u0357\x03\x02\x02\x02\u0357\x9B\x03" +
		"\x02\x02\x02\u0358\u0359\x05J&\x02\u0359\x9D\x03\x02\x02\x02\u035A\u035B" +
		"\x074\x02\x02\u035B\u035C\x05\x8CG\x02\u035C\x9F\x03\x02\x02\x02\u035D" +
		"\u0361\x07\x16\x02\x02\u035E\u0360\x05\xA2R\x02\u035F\u035E\x03\x02\x02" +
		"\x02\u0360\u0363\x03\x02\x02\x02\u0361\u035F\x03\x02\x02\x02\u0361\u0362" +
		"\x03\x02\x02\x02\u0362\u0364\x03\x02\x02\x02\u0363\u0361\x03\x02\x02\x02" +
		"\u0364\u0365\x07\x17\x02\x02\u0365\xA1\x03\x02\x02\x02\u0366\u036B\x05" +
		"\xA4S\x02\u0367\u036B\x05\n\x06\x02\u0368\u036B\x05\x0E\b\x02\u0369\u036B" +
		"\x05\xAAV\x02\u036A\u0366\x03\x02\x02\x02\u036A\u0367\x03\x02\x02\x02" +
		"\u036A\u0368\x03\x02\x02\x02\u036A\u0369\x03\x02\x02\x02\u036B\xA3\x03" +
		"\x02\x02\x02\u036C\u036D\x05\xA6T\x02\u036D\u036E\x07\x04\x02\x02\u036E" +
		"\xA5\x03\x02\x02\x02\u036F\u0370\x05\xA8U\x02\u0370\u0371\x05`1\x02\u0371" +
		"\u0372\x05J&\x02\u0372\xA7\x03\x02\x02\x02\u0373\u0375\x05f4\x02\u0374" +
		"\u0373\x03\x02\x02\x02\u0375\u0378\x03\x02\x02\x02\u0376\u0374\x03\x02" +
		"\x02\x02\u0376\u0377\x03\x02\x02\x02\u0377\xA9\x03\x02\x02\x02\u0378\u0376" +
		"\x03\x02\x02\x02\u0379\u03C7\x05\xA0Q\x02\u037A\u037B\x07c\x02\x02\u037B" +
		"\u037E\x05\xC8e\x02\u037C\u037D\x075\x02\x02\u037D\u037F\x05\xC8e\x02" +
		"\u037E\u037C\x03\x02\x02\x02\u037E\u037F\x03\x02\x02\x02\u037F\u0380\x03" +
		"\x02\x02\x02\u0380\u0381\x07\x04\x02\x02\u0381\u03C7\x03\x02\x02\x02\u0382" +
		"\u0383\x076\x02\x02\u0383\u0384\x05\xC0a\x02\u0384\u0387\x05\xAAV\x02" +
		"\u0385\u0386\x077\x02\x02\u0386\u0388\x05\xAAV\x02\u0387\u0385\x03\x02" +
		"\x02\x02\u0387\u0388\x03\x02\x02\x02\u0388\u03C7\x03\x02\x02\x02\u0389" +
		"\u038A\x078\x02\x02\u038A\u038B\x07,\x02\x02\u038B\u038C\x05\xB8]\x02" +
		"\u038C\u038D\x07-\x02\x02\u038D\u038E\x05\xAAV\x02\u038E\u03C7\x03\x02" +
		"\x02\x02\u038F\u0390\x079\x02\x02\u0390\u0391\x05\xC0a\x02\u0391\u0392" +
		"\x05\xAAV\x02\u0392\u03C7\x03\x02\x02\x02\u0393\u0394\x07:\x02\x02\u0394" +
		"\u0395\x05\xAAV\x02\u0395\u0396\x079\x02\x02\u0396\u0397\x05\xC0a\x02" +
		"\u0397\u0398\x07\x04\x02\x02\u0398\u03C7\x03\x02\x02\x02\u0399\u039A\x07" +
		";\x02\x02\u039A\u03A2\x05\xA0Q\x02\u039B\u039C\x05\xACW\x02\u039C\u039D" +
		"\x07<\x02\x02\u039D\u039E\x05\xA0Q\x02\u039E\u03A3\x03\x02\x02\x02\u039F" +
		"\u03A3\x05\xACW\x02\u03A0\u03A1\x07<\x02\x02\u03A1\u03A3\x05\xA0Q\x02" +
		"\u03A2\u039B\x03\x02\x02\x02\u03A2\u039F\x03\x02\x02\x02\u03A2\u03A0\x03" +
		"\x02\x02\x02\u03A3\u03C7\x03\x02\x02\x02\u03A4\u03A5\x07=\x02\x02\u03A5" +
		"\u03A6\x05\xC0a\x02\u03A6\u03A7\x05\xB2Z\x02\u03A7\u03C7\x03\x02\x02\x02" +
		"\u03A8\u03A9\x07\x1F\x02\x02\u03A9\u03AA\x05\xC0a\x02\u03AA\u03AB\x05" +
		"\xA0Q\x02\u03AB\u03C7\x03\x02\x02\x02\u03AC\u03AE\x07>\x02\x02\u03AD\u03AF" +
		"\x05\xC8e\x02\u03AE\u03AD\x03\x02\x02\x02\u03AE\u03AF\x03\x02\x02\x02" +
		"\u03AF\u03B0\x03\x02\x02\x02\u03B0\u03C7\x07\x04\x02\x02\u03B1\u03B2\x07" +
		"?\x02\x02\u03B2\u03B3\x05\xC8e\x02\u03B3\u03B4\x07\x04\x02\x02\u03B4\u03C7" +
		"\x03\x02\x02\x02\u03B5\u03B7\x07@\x02\x02\u03B6\u03B8\x07d\x02\x02\u03B7" +
		"\u03B6\x03\x02\x02\x02\u03B7\u03B8\x03\x02\x02\x02\u03B8\u03B9\x03\x02" +
		"\x02\x02\u03B9\u03C7\x07\x04\x02\x02\u03BA\u03BC\x07A\x02\x02\u03BB\u03BD" +
		"\x07d\x02\x02\u03BC\u03BB\x03\x02\x02\x02\u03BC\u03BD\x03\x02\x02\x02" +
		"\u03BD\u03BE\x03\x02\x02\x02\u03BE\u03C7\x07\x04\x02\x02\u03BF\u03C7\x07" +
		"\x04\x02\x02\u03C0\u03C1\x05\xC4c\x02\u03C1\u03C2\x07\x04\x02\x02\u03C2" +
		"\u03C7\x03\x02\x02\x02\u03C3\u03C4\x07d\x02\x02\u03C4\u03C5\x075\x02\x02" +
		"\u03C5\u03C7\x05\xAAV\x02\u03C6\u0379\x03\x02\x02\x02\u03C6\u037A\x03" +
		"\x02\x02\x02\u03C6\u0382\x03\x02\x02\x02\u03C6\u0389\x03\x02\x02\x02\u03C6" +
		"\u038F\x03\x02\x02\x02\u03C6\u0393\x03\x02\x02\x02\u03C6\u0399\x03\x02" +
		"\x02\x02\u03C6\u03A4\x03\x02\x02\x02\u03C6\u03A8\x03\x02\x02\x02\u03C6" +
		"\u03AC\x03\x02\x02\x02\u03C6\u03B1\x03\x02\x02\x02\u03C6\u03B5\x03\x02" +
		"\x02\x02\u03C6\u03BA\x03\x02\x02\x02\u03C6\u03BF\x03\x02\x02\x02\u03C6" +
		"\u03C0\x03\x02\x02\x02\u03C6\u03C3\x03\x02\x02\x02\u03C7\xAB\x03\x02\x02" +
		"\x02\u03C8\u03CC\x05\xAEX\x02\u03C9\u03CB\x05\xAEX\x02\u03CA\u03C9\x03" +
		"\x02\x02\x02\u03CB\u03CE\x03\x02\x02\x02\u03CC\u03CA\x03\x02\x02\x02\u03CC" +
		"\u03CD\x03\x02\x02\x02\u03CD\xAD\x03\x02\x02\x02\u03CE\u03CC\x03\x02\x02" +
		"\x02\u03CF\u03D0\x07B\x02\x02\u03D0\u03D1\x07,\x02\x02\u03D1\u03D2\x05" +
		"\xB0Y\x02\u03D2\u03D3\x07-\x02\x02\u03D3\u03D4\x05\xA0Q\x02\u03D4\xAF" +
		"\x03\x02\x02\x02\u03D5\u03D6\x05\xA8U\x02\u03D6\u03D7\x05`1\x02\u03D7" +
		"\u03D8\x05R*\x02\u03D8\xB1\x03\x02\x02\x02\u03D9\u03DD\x07\x16\x02\x02" +
		"\u03DA\u03DC\x05\xB4[\x02\u03DB\u03DA\x03\x02\x02\x02\u03DC\u03DF\x03" +
		"\x02\x02\x02\u03DD\u03DB\x03\x02\x02\x02\u03DD\u03DE\x03\x02\x02\x02\u03DE" +
		"\u03E3\x03\x02\x02\x02\u03DF\u03DD\x03\x02\x02\x02\u03E0\u03E2\x05\xB6" +
		"\\\x02\u03E1\u03E0\x03\x02\x02\x02\u03E2\u03E5\x03\x02\x02\x02\u03E3\u03E1" +
		"\x03\x02\x02\x02\u03E3\u03E4\x03\x02\x02\x02\u03E4\u03E6\x03\x02\x02\x02" +
		"\u03E5\u03E3\x03\x02\x02\x02\u03E6\u03E7\x07\x17\x02\x02\u03E7\xB3\x03" +
		"\x02\x02\x02\u03E8\u03EA\x05\xB6\\\x02\u03E9\u03E8\x03\x02\x02\x02\u03EA" +
		"\u03EB\x03\x02\x02\x02\u03EB\u03E9\x03\x02\x02\x02\u03EB\u03EC\x03\x02" +
		"\x02\x02\u03EC\u03F0\x03\x02\x02\x02\u03ED\u03EF\x05\xA2R\x02\u03EE\u03ED" +
		"\x03\x02\x02\x02\u03EF\u03F2\x03\x02\x02\x02\u03F0\u03EE\x03\x02\x02\x02" +
		"\u03F0\u03F1\x03\x02\x02\x02\u03F1\xB5\x03\x02\x02\x02\u03F2\u03F0\x03" +
		"\x02\x02\x02\u03F3\u03F4\x07C\x02\x02\u03F4\u03F5\x05\xC6d\x02\u03F5\u03F6" +
		"\x075\x02\x02\u03F6\u03FE\x03\x02\x02\x02\u03F7\u03F8\x07C\x02\x02\u03F8" +
		"\u03F9\x05\\/\x02\u03F9\u03FA\x075\x02\x02\u03FA\u03FE\x03\x02\x02\x02" +
		"\u03FB\u03FC\x074\x02\x02\u03FC\u03FE\x075\x02\x02\u03FD\u03F3\x03\x02" +
		"\x02\x02\u03FD\u03F7\x03\x02\x02\x02\u03FD\u03FB\x03\x02\x02\x02\u03FE" +
		"\xB7\x03\x02\x02\x02\u03FF\u040C\x05\xBC_\x02\u0400\u0402\x05\xBA^\x02" +
		"\u0401\u0400\x03\x02\x02\x02\u0401\u0402\x03\x02\x02\x02\u0402\u0403\x03" +
		"\x02\x02\x02\u0403\u0405\x07\x04\x02\x02\u0404\u0406\x05\xC8e\x02\u0405" +
		"\u0404\x03\x02\x02\x02\u0405\u0406\x03\x02\x02\x02\u0406\u0407\x03\x02" +
		"\x02\x02\u0407\u0409\x07\x04\x02\x02\u0408\u040A\x05\xBE`\x02\u0409\u0408" +
		"\x03\x02\x02\x02\u0409\u040A\x03\x02\x02\x02\u040A\u040C\x03\x02\x02\x02" +
		"\u040B\u03FF\x03\x02\x02\x02\u040B\u0401\x03\x02\x02\x02\u040C\xB9\x03" +
		"\x02\x02\x02\u040D\u0410\x05\xA6T\x02\u040E\u0410\x05\xC2b\x02\u040F\u040D" +
		"\x03\x02\x02\x02\u040F\u040E\x03\x02\x02\x02\u0410\xBB\x03\x02\x02\x02" +
		"\u0411\u0412\x05\xA8U\x02\u0412\u0413\x05`1\x02\u0413\u0414\x07d\x02\x02" +
		"\u0414\u0415\x075\x02\x02\u0415\u0416\x05\xC8e\x02\u0416\xBD\x03\x02\x02" +
		"\x02\u0417\u0418\x05\xC2b\x02\u0418\xBF\x03\x02\x02\x02\u0419\u041A\x07" +
		",\x02\x02\u041A\u041B\x05\xC8e\x02\u041B\u041C\x07-\x02\x02\u041C\xC1" +
		"\x03\x02\x02\x02\u041D\u0422\x05\xC8e\x02\u041E\u041F\x07\x13\x02\x02" +
		"\u041F\u0421\x05\xC8e\x02\u0420\u041E\x03\x02\x02\x02\u0421\u0424\x03" +
		"\x02\x02\x02\u0422\u0420\x03\x02\x02\x02\u0422\u0423\x03\x02\x02\x02\u0423" +
		"\xC3\x03\x02\x02\x02\u0424\u0422\x03\x02\x02\x02\u0425\u0426\x05\xC8e" +
		"\x02\u0426\xC5\x03\x02\x02\x02\u0427\u0428\x05\xC8e\x02\u0428\xC7\x03" +
		"\x02\x02\x02\u0429\u042A\be\x01\x02\u042A\u0437\x05\xCAf\x02\u042B\u042C" +
		"\t\x07\x02\x02\u042C\u0437\x05\xC8e\x13\u042D\u042E\t\b\x02\x02\u042E" +
		"\u0437\x05\xC8e\x12\u042F\u0430\x07,\x02\x02\u0430\u0431\x05`1\x02\u0431" +
		"\u0432\x07-\x02\x02\u0432\u0433\x05\xC8e\x11\u0433\u0437\x03\x02\x02\x02" +
		"\u0434\u0435\x07D\x02\x02\u0435\u0437\x05\xCCg\x02\u0436\u0429\x03\x02" +
		"\x02\x02\u0436\u042B\x03\x02\x02\x02\u0436\u042D\x03\x02\x02\x02\u0436" +
		"\u042F\x03\x02\x02\x02\u0436\u0434\x03\x02\x02\x02\u0437\u04B6\x03\x02" +
		"\x02\x02\u0438\u0439\f\x0F\x02\x02\u0439\u043A\t\t\x02\x02\u043A\u04B5" +
		"\x05\xC8e\x10\u043B\u043C\f\x0E\x02\x02\u043C\u043D\t\n\x02\x02\u043D" +
		"\u04B5\x05\xC8e\x0F\u043E\u0446\f\r\x02\x02\u043F\u0440\x07\x12\x02\x02" +
		"\u0440\u0447\x07\x12\x02\x02\u0441\u0442\x07\x14\x02\x02\u0442\u0443\x07" +
		"\x14\x02\x02\u0443\u0447\x07\x14\x02\x02\u0444\u0445\x07\x14\x02\x02";
	private static readonly _serializedATNSegment2: string =
		"\u0445\u0447\x07\x14\x02\x02\u0446\u043F\x03\x02\x02\x02\u0446\u0441\x03" +
		"\x02\x02\x02\u0446\u0444\x03\x02\x02\x02\u0447\u0448\x03\x02\x02\x02\u0448" +
		"\u04B5\x05\xC8e\x0E\u0449\u0450\f\f\x02\x02\u044A\u044B\x07\x12\x02\x02" +
		"\u044B\u0451\x07\x1D\x02\x02\u044C\u044D\x07\x14\x02\x02\u044D\u0451\x07" +
		"\x1D\x02\x02\u044E\u0451\x07\x14\x02\x02\u044F\u0451\x07\x12\x02\x02\u0450" +
		"\u044A\x03\x02\x02\x02\u0450\u044C\x03\x02\x02\x02\u0450\u044E\x03\x02" +
		"\x02\x02\u0450\u044F\x03\x02\x02\x02\u0451\u0452\x03\x02\x02\x02\u0452" +
		"\u04B5\x05\xC8e\r\u0453\u0454\f\n\x02\x02\u0454\u0455\t\v\x02\x02\u0455" +
		"\u04B5\x05\xC8e\v\u0456\u0457\f\t\x02\x02\u0457\u0458\x07\x15\x02\x02" +
		"\u0458\u04B5\x05\xC8e\n\u0459\u045A\f\b\x02\x02\u045A\u045B\x07P\x02\x02" +
		"\u045B\u04B5\x05\xC8e\t\u045C\u045D\f\x07\x02\x02\u045D\u045E\x07Q\x02" +
		"\x02\u045E\u04B5\x05\xC8e\b\u045F\u0460\f\x06\x02\x02\u0460\u0461\x07" +
		"R\x02\x02\u0461\u04B5\x05\xC8e\x07\u0462\u0463\f\x05\x02\x02\u0463\u0464" +
		"\x07S\x02\x02\u0464\u04B5\x05\xC8e\x06\u0465\u0466\f\x04\x02\x02\u0466" +
		"\u0467\x07*\x02\x02\u0467\u0468\x05\xC8e\x02\u0468\u0469\x075\x02\x02" +
		"\u0469\u046A\x05\xC8e\x05\u046A\u04B5\x03\x02\x02\x02\u046B\u047F\f\x03" +
		"\x02\x02\u046C\u0480\x07T\x02\x02\u046D\u0480\x07U\x02\x02\u046E\u0480" +
		"\x07V\x02\x02\u046F\u0480\x07W\x02\x02\u0470\u0480\x07X\x02\x02\u0471" +
		"\u0480\x07Y\x02\x02\u0472\u0480\x07Z\x02\x02\u0473\u0480\x07\x1D\x02\x02" +
		"\u0474\u0475\x07\x14\x02\x02\u0475\u0476\x07\x14\x02\x02\u0476\u0480\x07" +
		"\x1D\x02\x02\u0477\u0478\x07\x14\x02\x02\u0478\u0479\x07\x14\x02\x02\u0479" +
		"\u047A\x07\x14\x02\x02\u047A\u0480\x07\x1D\x02\x02\u047B\u047C\x07\x12" +
		"\x02\x02\u047C\u047D\x07\x12\x02\x02\u047D\u0480\x07\x1D\x02\x02\u047E" +
		"\u0480\x07[\x02\x02\u047F\u046C\x03\x02\x02\x02\u047F\u046D\x03\x02\x02" +
		"\x02\u047F\u046E\x03\x02\x02\x02\u047F\u046F\x03\x02\x02\x02\u047F\u0470" +
		"\x03\x02\x02\x02\u047F\u0471\x03\x02\x02\x02\u047F\u0472\x03\x02\x02\x02" +
		"\u047F\u0473\x03\x02\x02\x02\u047F\u0474\x03\x02\x02\x02\u047F\u0477\x03" +
		"\x02\x02\x02\u047F\u047B\x03\x02\x02\x02\u047F\u047E\x03\x02\x02\x02\u0480" +
		"\u0481\x03\x02\x02\x02\u0481\u04B5\x05\xC8e\x04\u0482\u0483\f\x1C\x02" +
		"\x02\u0483\u0484\x07\x07\x02\x02\u0484\u04B5\x07d\x02\x02\u0485\u0486" +
		"\f\x1B\x02\x02\u0486\u0487\x07\x07\x02\x02\u0487\u04B5\x07/\x02\x02\u0488" +
		"\u0489\f\x1A\x02\x02\u0489\u048A\x07\x07\x02\x02\u048A\u048B\x07+\x02" +
		"\x02\u048B\u048D\x07,\x02\x02\u048C\u048E\x05\xC2b\x02\u048D\u048C\x03" +
		"\x02\x02\x02\u048D\u048E\x03\x02\x02\x02\u048E\u048F\x03\x02\x02\x02\u048F" +
		"\u04B5\x07-\x02\x02\u0490\u0491\f\x19\x02\x02\u0491\u0492\x07\x07\x02" +
		"\x02\u0492\u0493\x07D\x02\x02\u0493\u0494\x07d\x02\x02\u0494\u0496\x07" +
		",\x02\x02\u0495\u0497\x05\xC2b\x02\u0496\u0495\x03\x02\x02\x02\u0496\u0497" +
		"\x03\x02\x02\x02\u0497\u0498\x03\x02\x02\x02\u0498\u04B5\x07-\x02\x02" +
		"\u0499\u049A\f\x18\x02\x02\u049A\u049B\x07\x07\x02\x02\u049B\u049C\x07" +
		"+\x02\x02\u049C\u049D\x07\x07\x02\x02\u049D\u049F\x07d\x02\x02\u049E\u04A0" +
		"\x05\xDAn\x02\u049F\u049E\x03\x02\x02\x02\u049F\u04A0\x03\x02\x02\x02" +
		"\u04A0\u04B5\x03\x02\x02\x02\u04A1\u04A2\f\x17\x02\x02\u04A2\u04A3\x07" +
		"\x07\x02\x02\u04A3\u04B5\x05\xD2j\x02\u04A4\u04A5\f\x16\x02\x02\u04A5" +
		"\u04A6\x07\x19\x02\x02\u04A6\u04A7\x05\xC8e\x02\u04A7\u04A8\x07\x1A\x02" +
		"\x02\u04A8\u04B5\x03\x02\x02\x02\u04A9\u04AA\f\x15\x02\x02\u04AA\u04AC" +
		"\x07,\x02\x02\u04AB\u04AD\x05\xC2b\x02\u04AC\u04AB\x03\x02\x02\x02\u04AC" +
		"\u04AD\x03\x02\x02\x02\u04AD\u04AE\x03\x02\x02\x02\u04AE\u04B5\x07-\x02" +
		"\x02\u04AF\u04B0\f\x14\x02\x02\u04B0\u04B5\t\f\x02\x02\u04B1\u04B2\f\v" +
		"\x02\x02\u04B2\u04B3\x07M\x02\x02\u04B3\u04B5\x05`1\x02\u04B4\u0438\x03" +
		"\x02\x02\x02\u04B4\u043B\x03\x02\x02\x02\u04B4\u043E\x03\x02\x02\x02\u04B4" +
		"\u0449\x03\x02\x02\x02\u04B4\u0453\x03\x02\x02\x02\u04B4\u0456\x03\x02" +
		"\x02\x02\u04B4\u0459\x03\x02\x02\x02\u04B4\u045C\x03\x02\x02\x02\u04B4" +
		"\u045F\x03\x02\x02\x02\u04B4\u0462\x03\x02\x02\x02\u04B4\u0465\x03\x02" +
		"\x02\x02\u04B4\u046B\x03\x02\x02\x02\u04B4\u0482\x03\x02\x02\x02\u04B4" +
		"\u0485\x03\x02\x02\x02\u04B4\u0488\x03\x02\x02\x02\u04B4\u0490\x03\x02" +
		"\x02\x02\u04B4\u0499\x03\x02\x02\x02\u04B4\u04A1\x03\x02\x02\x02\u04B4" +
		"\u04A4\x03\x02\x02\x02\u04B4\u04A9\x03\x02\x02\x02\u04B4\u04AF\x03\x02" +
		"\x02\x02\u04B4\u04B1\x03\x02\x02\x02\u04B5\u04B8\x03\x02\x02\x02\u04B6" +
		"\u04B4\x03\x02\x02\x02\u04B6\u04B7\x03\x02\x02\x02\u04B7\xC9\x03\x02\x02" +
		"\x02\u04B8\u04B6\x03\x02\x02\x02\u04B9\u04BA\x07,\x02\x02\u04BA\u04BB" +
		"\x05\xC8e\x02\u04BB\u04BC\x07-\x02\x02\u04BC\u04C9\x03\x02\x02\x02\u04BD" +
		"\u04C9\x07/\x02\x02\u04BE\u04C9\x07+\x02\x02\u04BF\u04C9\x05|?\x02\u04C0" +
		"\u04C9\x07d\x02\x02\u04C1\u04C2\x05`1\x02\u04C2\u04C3\x07\x07\x02\x02" +
		"\u04C3\u04C4\x07\t\x02\x02\u04C4\u04C9\x03\x02\x02\x02\u04C5\u04C6\x07" +
		"\x1B\x02\x02\u04C6\u04C7\x07\x07\x02\x02\u04C7\u04C9\x07\t\x02\x02\u04C8" +
		"\u04B9\x03\x02\x02\x02\u04C8\u04BD\x03\x02\x02\x02\u04C8\u04BE\x03\x02" +
		"\x02\x02\u04C8\u04BF\x03\x02\x02\x02\u04C8\u04C0\x03\x02\x02\x02\u04C8" +
		"\u04C1\x03\x02\x02\x02\u04C8\u04C5\x03\x02\x02\x02\u04C9\xCB\x03\x02\x02" +
		"\x02\u04CA\u04CB\x05\xD8m\x02\u04CB\u04CC\x05\xCEh\x02\u04CC\u04CD\x05" +
		"\xD6l\x02\u04CD\u04D4\x03\x02\x02\x02\u04CE\u04D1\x05\xCEh\x02\u04CF\u04D2" +
		"\x05\xD4k\x02\u04D0\u04D2\x05\xD6l\x02\u04D1\u04CF\x03\x02\x02\x02\u04D1" +
		"\u04D0\x03\x02\x02\x02\u04D2\u04D4\x03\x02\x02\x02\u04D3\u04CA\x03\x02" +
		"\x02\x02\u04D3\u04CE\x03\x02\x02\x02\u04D4\xCD\x03\x02\x02\x02\u04D5\u04D8" +
		"\x05b2\x02\u04D6\u04D8\x05d3\x02\u04D7\u04D5\x03\x02\x02\x02\u04D7\u04D6" +
		"\x03\x02\x02\x02\u04D8\xCF\x03\x02\x02\x02\u04D9\u04DB\x05\xD8m\x02\u04DA" +
		"\u04D9\x03\x02\x02\x02\u04DA\u04DB\x03\x02\x02\x02\u04DB\u04DC\x03\x02" +
		"\x02\x02\u04DC\u04DD\x07d\x02\x02\u04DD\u04DE\x05\xD6l\x02\u04DE\xD1\x03" +
		"\x02\x02\x02\u04DF\u04E0\x05\xD8m\x02\u04E0\u04E1\x07d\x02\x02\u04E1\u04E2" +
		"\x05\xDAn\x02\u04E2\xD3\x03\x02\x02\x02\u04E3\u04FF\x07\x19\x02\x02\u04E4" +
		"\u04E9\x07\x1A\x02\x02\u04E5\u04E6\x07\x19\x02\x02\u04E6\u04E8\x07\x1A" +
		"\x02\x02\u04E7\u04E5\x03\x02\x02\x02\u04E8\u04EB\x03\x02\x02\x02\u04E9" +
		"\u04E7\x03\x02\x02\x02\u04E9\u04EA\x03\x02\x02\x02\u04EA\u04EC\x03\x02" +
		"\x02\x02\u04EB\u04E9\x03\x02\x02\x02\u04EC\u0500\x05V,\x02\u04ED\u04EE" +
		"\x05\xC8e\x02\u04EE\u04F5\x07\x1A\x02\x02\u04EF\u04F0\x07\x19\x02\x02" +
		"\u04F0\u04F1\x05\xC8e\x02\u04F1\u04F2\x07\x1A\x02\x02\u04F2\u04F4\x03" +
		"\x02\x02\x02\u04F3\u04EF\x03\x02\x02\x02\u04F4\u04F7\x03\x02\x02\x02\u04F5" +
		"\u04F3\x03\x02\x02\x02\u04F5\u04F6\x03\x02\x02\x02\u04F6\u04FC\x03\x02" +
		"\x02\x02\u04F7\u04F5\x03\x02\x02\x02\u04F8\u04F9\x07\x19\x02\x02\u04F9" +
		"\u04FB\x07\x1A\x02\x02\u04FA\u04F8\x03\x02\x02\x02\u04FB\u04FE\x03\x02" +
		"\x02\x02\u04FC\u04FA\x03\x02\x02\x02\u04FC\u04FD\x03\x02\x02\x02\u04FD" +
		"\u0500\x03\x02\x02\x02\u04FE\u04FC\x03\x02\x02\x02\u04FF\u04E4\x03\x02" +
		"\x02\x02\u04FF\u04ED\x03\x02\x02\x02\u0500\xD5\x03\x02\x02\x02\u0501\u0503" +
		"\x05\xDAn\x02\u0502\u0504\x05&\x14\x02\u0503\u0502\x03\x02\x02\x02\u0503" +
		"\u0504\x03\x02\x02\x02\u0504\xD7\x03\x02\x02\x02\u0505\u0506\x07\x12\x02" +
		"\x02\u0506\u0507\x05$\x13\x02\u0507\u0508\x07\x14\x02\x02\u0508\xD9\x03" +
		"\x02\x02\x02\u0509\u050B\x07,\x02\x02\u050A\u050C\x05\xC2b\x02\u050B\u050A" +
		"\x03\x02\x02\x02\u050B\u050C\x03\x02\x02\x02\u050C\u050D\x03\x02\x02\x02" +
		"\u050D\u050E\x07-\x02\x02\u050E\xDB\x03\x02\x02\x02\x8E\xDD\xE2\xE8\xF3" +
		"\xF8\xFF\u0105\u0108\u010D\u0111\u0115\u011D\u0123\u012D\u0132\u013B\u0143" +
		"\u014A\u014F\u0152\u0155\u015E\u0162\u0166\u0169\u016F\u0175\u0179\u0182" +
		"\u0189\u0192\u0199\u019F\u01A7\u01B0\u01BA\u01BE\u01C2\u01CC\u01D2\u01DA" +
		"\u01E3\u01ED\u01F2\u01F6\u01FD\u0202\u0209\u0211\u021D\u0223\u022A\u0231" +
		"\u023C\u0241\u0249\u024D\u024F\u025F\u026C\u0274\u0277\u027B\u0280\u0284" +
		"\u028B\u0293\u029C\u029E\u02A5\u02AA\u02B5\u02B9\u02BF\u02C4\u02CA\u02D3" +
		"\u02D9\u02E0\u02E9\u02F2\u02F9\u02FC\u0303\u030B\u0315\u031D\u0320\u0323" +
		"\u0330\u033E\u0342\u0346\u034A\u034C\u0350\u0356\u0361\u036A\u0376\u037E" +
		"\u0387\u03A2\u03AE\u03B7\u03BC\u03C6\u03CC\u03DD\u03E3\u03EB\u03F0\u03FD" +
		"\u0401\u0405\u0409\u040B\u040F\u0422\u0436\u0446\u0450\u047F\u048D\u0496" +
		"\u049F\u04AC\u04B4\u04B6\u04C8\u04D1\u04D3\u04D7\u04DA\u04E9\u04F5\u04FC" +
		"\u04FF\u0503\u050B";
	public static readonly _serializedATN: string = Utils.join(
		[
			JavaParser._serializedATNSegment0,
			JavaParser._serializedATNSegment1,
			JavaParser._serializedATNSegment2,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!JavaParser.__ATN) {
			JavaParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(JavaParser._serializedATN));
		}

		return JavaParser.__ATN;
	}

}

export class CompilationUnitContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(JavaParser.EOF, 0); }
	public packageDeclaration(): PackageDeclarationContext | undefined {
		return this.tryGetRuleContext(0, PackageDeclarationContext);
	}
	public importDeclaration(): ImportDeclarationContext[];
	public importDeclaration(i: number): ImportDeclarationContext;
	public importDeclaration(i?: number): ImportDeclarationContext | ImportDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ImportDeclarationContext);
		} else {
			return this.getRuleContext(i, ImportDeclarationContext);
		}
	}
	public typeDeclaration(): TypeDeclarationContext[];
	public typeDeclaration(i: number): TypeDeclarationContext;
	public typeDeclaration(i?: number): TypeDeclarationContext | TypeDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeDeclarationContext);
		} else {
			return this.getRuleContext(i, TypeDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_compilationUnit; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterCompilationUnit) {
			listener.enterCompilationUnit(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitCompilationUnit) {
			listener.exitCompilationUnit(this);
		}
	}
}


export class PackageDeclarationContext extends ParserRuleContext {
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_packageDeclaration; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterPackageDeclaration) {
			listener.enterPackageDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitPackageDeclaration) {
			listener.exitPackageDeclaration(this);
		}
	}
}


export class ImportDeclarationContext extends ParserRuleContext {
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_importDeclaration; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterImportDeclaration) {
			listener.enterImportDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitImportDeclaration) {
			listener.exitImportDeclaration(this);
		}
	}
}


export class TypeDeclarationContext extends ParserRuleContext {
	public classDeclaration(): ClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassDeclarationContext);
	}
	public interfaceDeclaration(): InterfaceDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InterfaceDeclarationContext);
	}
	public enumDeclaration(): EnumDeclarationContext | undefined {
		return this.tryGetRuleContext(0, EnumDeclarationContext);
	}
	public classOrInterfaceModifier(): ClassOrInterfaceModifierContext[];
	public classOrInterfaceModifier(i: number): ClassOrInterfaceModifierContext;
	public classOrInterfaceModifier(i?: number): ClassOrInterfaceModifierContext | ClassOrInterfaceModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassOrInterfaceModifierContext);
		} else {
			return this.getRuleContext(i, ClassOrInterfaceModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_typeDeclaration; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterTypeDeclaration) {
			listener.enterTypeDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitTypeDeclaration) {
			listener.exitTypeDeclaration(this);
		}
	}
}


export class ClassDeclarationContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(JavaParser.Identifier, 0); }
	public classBody(): ClassBodyContext {
		return this.getRuleContext(0, ClassBodyContext);
	}
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
	}
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public typeList(): TypeListContext | undefined {
		return this.tryGetRuleContext(0, TypeListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_classDeclaration; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterClassDeclaration) {
			listener.enterClassDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitClassDeclaration) {
			listener.exitClassDeclaration(this);
		}
	}
}


export class EnumDeclarationContext extends ParserRuleContext {
	public ENUM(): TerminalNode { return this.getToken(JavaParser.ENUM, 0); }
	public Identifier(): TerminalNode { return this.getToken(JavaParser.Identifier, 0); }
	public enumBody(): EnumBodyContext {
		return this.getRuleContext(0, EnumBodyContext);
	}
	public typeList(): TypeListContext | undefined {
		return this.tryGetRuleContext(0, TypeListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_enumDeclaration; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterEnumDeclaration) {
			listener.enterEnumDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitEnumDeclaration) {
			listener.exitEnumDeclaration(this);
		}
	}
}


export class InterfaceDeclarationContext extends ParserRuleContext {
	public normalInterfaceDeclaration(): NormalInterfaceDeclarationContext | undefined {
		return this.tryGetRuleContext(0, NormalInterfaceDeclarationContext);
	}
	public annotationTypeDeclaration(): AnnotationTypeDeclarationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationTypeDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_interfaceDeclaration; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterInterfaceDeclaration) {
			listener.enterInterfaceDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitInterfaceDeclaration) {
			listener.exitInterfaceDeclaration(this);
		}
	}
}


export class ClassOrInterfaceModifierContext extends ParserRuleContext {
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_classOrInterfaceModifier; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterClassOrInterfaceModifier) {
			listener.enterClassOrInterfaceModifier(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitClassOrInterfaceModifier) {
			listener.exitClassOrInterfaceModifier(this);
		}
	}
}


export class ModifiersContext extends ParserRuleContext {
	public modifier(): ModifierContext[];
	public modifier(i: number): ModifierContext;
	public modifier(i?: number): ModifierContext | ModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModifierContext);
		} else {
			return this.getRuleContext(i, ModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_modifiers; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterModifiers) {
			listener.enterModifiers(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitModifiers) {
			listener.exitModifiers(this);
		}
	}
}


export class TypeParametersContext extends ParserRuleContext {
	public typeParameter(): TypeParameterContext[];
	public typeParameter(i: number): TypeParameterContext;
	public typeParameter(i?: number): TypeParameterContext | TypeParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeParameterContext);
		} else {
			return this.getRuleContext(i, TypeParameterContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_typeParameters; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterTypeParameters) {
			listener.enterTypeParameters(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitTypeParameters) {
			listener.exitTypeParameters(this);
		}
	}
}


export class TypeParameterContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(JavaParser.Identifier, 0); }
	public typeBound(): TypeBoundContext | undefined {
		return this.tryGetRuleContext(0, TypeBoundContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_typeParameter; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterTypeParameter) {
			listener.enterTypeParameter(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitTypeParameter) {
			listener.exitTypeParameter(this);
		}
	}
}


export class TypeBoundContext extends ParserRuleContext {
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_typeBound; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterTypeBound) {
			listener.enterTypeBound(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitTypeBound) {
			listener.exitTypeBound(this);
		}
	}
}


export class EnumBodyContext extends ParserRuleContext {
	public enumConstants(): EnumConstantsContext | undefined {
		return this.tryGetRuleContext(0, EnumConstantsContext);
	}
	public enumBodyDeclarations(): EnumBodyDeclarationsContext | undefined {
		return this.tryGetRuleContext(0, EnumBodyDeclarationsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_enumBody; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterEnumBody) {
			listener.enterEnumBody(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitEnumBody) {
			listener.exitEnumBody(this);
		}
	}
}


export class EnumConstantsContext extends ParserRuleContext {
	public enumConstant(): EnumConstantContext[];
	public enumConstant(i: number): EnumConstantContext;
	public enumConstant(i?: number): EnumConstantContext | EnumConstantContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EnumConstantContext);
		} else {
			return this.getRuleContext(i, EnumConstantContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_enumConstants; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterEnumConstants) {
			listener.enterEnumConstants(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitEnumConstants) {
			listener.exitEnumConstants(this);
		}
	}
}


export class EnumConstantContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(JavaParser.Identifier, 0); }
	public annotations(): AnnotationsContext | undefined {
		return this.tryGetRuleContext(0, AnnotationsContext);
	}
	public arguments(): ArgumentsContext | undefined {
		return this.tryGetRuleContext(0, ArgumentsContext);
	}
	public classBody(): ClassBodyContext | undefined {
		return this.tryGetRuleContext(0, ClassBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_enumConstant; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterEnumConstant) {
			listener.enterEnumConstant(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitEnumConstant) {
			listener.exitEnumConstant(this);
		}
	}
}


export class EnumBodyDeclarationsContext extends ParserRuleContext {
	public classBodyDeclaration(): ClassBodyDeclarationContext[];
	public classBodyDeclaration(i: number): ClassBodyDeclarationContext;
	public classBodyDeclaration(i?: number): ClassBodyDeclarationContext | ClassBodyDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassBodyDeclarationContext);
		} else {
			return this.getRuleContext(i, ClassBodyDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_enumBodyDeclarations; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterEnumBodyDeclarations) {
			listener.enterEnumBodyDeclarations(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitEnumBodyDeclarations) {
			listener.exitEnumBodyDeclarations(this);
		}
	}
}


export class NormalInterfaceDeclarationContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(JavaParser.Identifier, 0); }
	public interfaceBody(): InterfaceBodyContext {
		return this.getRuleContext(0, InterfaceBodyContext);
	}
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
	}
	public typeList(): TypeListContext | undefined {
		return this.tryGetRuleContext(0, TypeListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_normalInterfaceDeclaration; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterNormalInterfaceDeclaration) {
			listener.enterNormalInterfaceDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitNormalInterfaceDeclaration) {
			listener.exitNormalInterfaceDeclaration(this);
		}
	}
}


export class TypeListContext extends ParserRuleContext {
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_typeList; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterTypeList) {
			listener.enterTypeList(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitTypeList) {
			listener.exitTypeList(this);
		}
	}
}


export class ClassBodyContext extends ParserRuleContext {
	public classBodyDeclaration(): ClassBodyDeclarationContext[];
	public classBodyDeclaration(i: number): ClassBodyDeclarationContext;
	public classBodyDeclaration(i?: number): ClassBodyDeclarationContext | ClassBodyDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassBodyDeclarationContext);
		} else {
			return this.getRuleContext(i, ClassBodyDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_classBody; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterClassBody) {
			listener.enterClassBody(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitClassBody) {
			listener.exitClassBody(this);
		}
	}
}


export class InterfaceBodyContext extends ParserRuleContext {
	public interfaceBodyDeclaration(): InterfaceBodyDeclarationContext[];
	public interfaceBodyDeclaration(i: number): InterfaceBodyDeclarationContext;
	public interfaceBodyDeclaration(i?: number): InterfaceBodyDeclarationContext | InterfaceBodyDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InterfaceBodyDeclarationContext);
		} else {
			return this.getRuleContext(i, InterfaceBodyDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_interfaceBody; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterInterfaceBody) {
			listener.enterInterfaceBody(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitInterfaceBody) {
			listener.exitInterfaceBody(this);
		}
	}
}


export class ClassBodyDeclarationContext extends ParserRuleContext {
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public modifiers(): ModifiersContext | undefined {
		return this.tryGetRuleContext(0, ModifiersContext);
	}
	public member(): MemberContext | undefined {
		return this.tryGetRuleContext(0, MemberContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_classBodyDeclaration; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterClassBodyDeclaration) {
			listener.enterClassBodyDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitClassBodyDeclaration) {
			listener.exitClassBodyDeclaration(this);
		}
	}
}


export class MemberContext extends ParserRuleContext {
	public genericMethodDeclaration(): GenericMethodDeclarationContext | undefined {
		return this.tryGetRuleContext(0, GenericMethodDeclarationContext);
	}
	public methodDeclaration(): MethodDeclarationContext | undefined {
		return this.tryGetRuleContext(0, MethodDeclarationContext);
	}
	public fieldDeclaration(): FieldDeclarationContext | undefined {
		return this.tryGetRuleContext(0, FieldDeclarationContext);
	}
	public constructorDeclaration(): ConstructorDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ConstructorDeclarationContext);
	}
	public interfaceDeclaration(): InterfaceDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InterfaceDeclarationContext);
	}
	public classDeclaration(): ClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_member; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterMember) {
			listener.enterMember(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitMember) {
			listener.exitMember(this);
		}
	}
}


export class MethodDeclarationContext extends ParserRuleContext {
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public Identifier(): TerminalNode { return this.getToken(JavaParser.Identifier, 0); }
	public formalParameters(): FormalParametersContext {
		return this.getRuleContext(0, FormalParametersContext);
	}
	public methodDeclarationRest(): MethodDeclarationRestContext {
		return this.getRuleContext(0, MethodDeclarationRestContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_methodDeclaration; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterMethodDeclaration) {
			listener.enterMethodDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitMethodDeclaration) {
			listener.exitMethodDeclaration(this);
		}
	}
}


export class MethodDeclarationRestContext extends ParserRuleContext {
	public methodBody(): MethodBodyContext | undefined {
		return this.tryGetRuleContext(0, MethodBodyContext);
	}
	public qualifiedNameList(): QualifiedNameListContext | undefined {
		return this.tryGetRuleContext(0, QualifiedNameListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_methodDeclarationRest; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterMethodDeclarationRest) {
			listener.enterMethodDeclarationRest(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitMethodDeclarationRest) {
			listener.exitMethodDeclarationRest(this);
		}
	}
}


export class GenericMethodDeclarationContext extends ParserRuleContext {
	public typeParameters(): TypeParametersContext {
		return this.getRuleContext(0, TypeParametersContext);
	}
	public methodDeclaration(): MethodDeclarationContext {
		return this.getRuleContext(0, MethodDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_genericMethodDeclaration; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterGenericMethodDeclaration) {
			listener.enterGenericMethodDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitGenericMethodDeclaration) {
			listener.exitGenericMethodDeclaration(this);
		}
	}
}


export class FieldDeclarationContext extends ParserRuleContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public variableDeclarators(): VariableDeclaratorsContext {
		return this.getRuleContext(0, VariableDeclaratorsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_fieldDeclaration; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterFieldDeclaration) {
			listener.enterFieldDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitFieldDeclaration) {
			listener.exitFieldDeclaration(this);
		}
	}
}


export class ConstructorDeclarationContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(JavaParser.Identifier, 0); }
	public formalParameters(): FormalParametersContext {
		return this.getRuleContext(0, FormalParametersContext);
	}
	public constructorBody(): ConstructorBodyContext {
		return this.getRuleContext(0, ConstructorBodyContext);
	}
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
	}
	public qualifiedNameList(): QualifiedNameListContext | undefined {
		return this.tryGetRuleContext(0, QualifiedNameListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_constructorDeclaration; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterConstructorDeclaration) {
			listener.enterConstructorDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitConstructorDeclaration) {
			listener.exitConstructorDeclaration(this);
		}
	}
}


export class InterfaceBodyDeclarationContext extends ParserRuleContext {
	public modifiers(): ModifiersContext | undefined {
		return this.tryGetRuleContext(0, ModifiersContext);
	}
	public interfaceMemberDecl(): InterfaceMemberDeclContext | undefined {
		return this.tryGetRuleContext(0, InterfaceMemberDeclContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_interfaceBodyDeclaration; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterInterfaceBodyDeclaration) {
			listener.enterInterfaceBodyDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitInterfaceBodyDeclaration) {
			listener.exitInterfaceBodyDeclaration(this);
		}
	}
}


export class InterfaceMemberDeclContext extends ParserRuleContext {
	public interfaceMethodOrFieldDecl(): InterfaceMethodOrFieldDeclContext | undefined {
		return this.tryGetRuleContext(0, InterfaceMethodOrFieldDeclContext);
	}
	public interfaceGenericMethodDecl(): InterfaceGenericMethodDeclContext | undefined {
		return this.tryGetRuleContext(0, InterfaceGenericMethodDeclContext);
	}
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(JavaParser.Identifier, 0); }
	public voidInterfaceMethodDeclaratorRest(): VoidInterfaceMethodDeclaratorRestContext | undefined {
		return this.tryGetRuleContext(0, VoidInterfaceMethodDeclaratorRestContext);
	}
	public interfaceDeclaration(): InterfaceDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InterfaceDeclarationContext);
	}
	public classDeclaration(): ClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_interfaceMemberDecl; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterInterfaceMemberDecl) {
			listener.enterInterfaceMemberDecl(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitInterfaceMemberDecl) {
			listener.exitInterfaceMemberDecl(this);
		}
	}
}


export class InterfaceMethodOrFieldDeclContext extends ParserRuleContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public Identifier(): TerminalNode { return this.getToken(JavaParser.Identifier, 0); }
	public interfaceMethodOrFieldRest(): InterfaceMethodOrFieldRestContext {
		return this.getRuleContext(0, InterfaceMethodOrFieldRestContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_interfaceMethodOrFieldDecl; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterInterfaceMethodOrFieldDecl) {
			listener.enterInterfaceMethodOrFieldDecl(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitInterfaceMethodOrFieldDecl) {
			listener.exitInterfaceMethodOrFieldDecl(this);
		}
	}
}


export class InterfaceMethodOrFieldRestContext extends ParserRuleContext {
	public constantDeclaratorsRest(): ConstantDeclaratorsRestContext | undefined {
		return this.tryGetRuleContext(0, ConstantDeclaratorsRestContext);
	}
	public interfaceMethodDeclaratorRest(): InterfaceMethodDeclaratorRestContext | undefined {
		return this.tryGetRuleContext(0, InterfaceMethodDeclaratorRestContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_interfaceMethodOrFieldRest; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterInterfaceMethodOrFieldRest) {
			listener.enterInterfaceMethodOrFieldRest(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitInterfaceMethodOrFieldRest) {
			listener.exitInterfaceMethodOrFieldRest(this);
		}
	}
}


export class VoidMethodDeclaratorRestContext extends ParserRuleContext {
	public formalParameters(): FormalParametersContext {
		return this.getRuleContext(0, FormalParametersContext);
	}
	public methodBody(): MethodBodyContext | undefined {
		return this.tryGetRuleContext(0, MethodBodyContext);
	}
	public qualifiedNameList(): QualifiedNameListContext | undefined {
		return this.tryGetRuleContext(0, QualifiedNameListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_voidMethodDeclaratorRest; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterVoidMethodDeclaratorRest) {
			listener.enterVoidMethodDeclaratorRest(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitVoidMethodDeclaratorRest) {
			listener.exitVoidMethodDeclaratorRest(this);
		}
	}
}


export class InterfaceMethodDeclaratorRestContext extends ParserRuleContext {
	public formalParameters(): FormalParametersContext {
		return this.getRuleContext(0, FormalParametersContext);
	}
	public qualifiedNameList(): QualifiedNameListContext | undefined {
		return this.tryGetRuleContext(0, QualifiedNameListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_interfaceMethodDeclaratorRest; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterInterfaceMethodDeclaratorRest) {
			listener.enterInterfaceMethodDeclaratorRest(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitInterfaceMethodDeclaratorRest) {
			listener.exitInterfaceMethodDeclaratorRest(this);
		}
	}
}


export class InterfaceGenericMethodDeclContext extends ParserRuleContext {
	public typeParameters(): TypeParametersContext {
		return this.getRuleContext(0, TypeParametersContext);
	}
	public Identifier(): TerminalNode { return this.getToken(JavaParser.Identifier, 0); }
	public interfaceMethodDeclaratorRest(): InterfaceMethodDeclaratorRestContext {
		return this.getRuleContext(0, InterfaceMethodDeclaratorRestContext);
	}
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_interfaceGenericMethodDecl; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterInterfaceGenericMethodDecl) {
			listener.enterInterfaceGenericMethodDecl(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitInterfaceGenericMethodDecl) {
			listener.exitInterfaceGenericMethodDecl(this);
		}
	}
}


export class VoidInterfaceMethodDeclaratorRestContext extends ParserRuleContext {
	public formalParameters(): FormalParametersContext {
		return this.getRuleContext(0, FormalParametersContext);
	}
	public qualifiedNameList(): QualifiedNameListContext | undefined {
		return this.tryGetRuleContext(0, QualifiedNameListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_voidInterfaceMethodDeclaratorRest; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterVoidInterfaceMethodDeclaratorRest) {
			listener.enterVoidInterfaceMethodDeclaratorRest(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitVoidInterfaceMethodDeclaratorRest) {
			listener.exitVoidInterfaceMethodDeclaratorRest(this);
		}
	}
}


export class ConstantDeclaratorContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(JavaParser.Identifier, 0); }
	public constantDeclaratorRest(): ConstantDeclaratorRestContext {
		return this.getRuleContext(0, ConstantDeclaratorRestContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_constantDeclarator; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterConstantDeclarator) {
			listener.enterConstantDeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitConstantDeclarator) {
			listener.exitConstantDeclarator(this);
		}
	}
}


export class VariableDeclaratorsContext extends ParserRuleContext {
	public variableDeclarator(): VariableDeclaratorContext[];
	public variableDeclarator(i: number): VariableDeclaratorContext;
	public variableDeclarator(i?: number): VariableDeclaratorContext | VariableDeclaratorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableDeclaratorContext);
		} else {
			return this.getRuleContext(i, VariableDeclaratorContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_variableDeclarators; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterVariableDeclarators) {
			listener.enterVariableDeclarators(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitVariableDeclarators) {
			listener.exitVariableDeclarators(this);
		}
	}
}


export class VariableDeclaratorContext extends ParserRuleContext {
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		return this.getRuleContext(0, VariableDeclaratorIdContext);
	}
	public variableInitializer(): VariableInitializerContext | undefined {
		return this.tryGetRuleContext(0, VariableInitializerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_variableDeclarator; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterVariableDeclarator) {
			listener.enterVariableDeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitVariableDeclarator) {
			listener.exitVariableDeclarator(this);
		}
	}
}


export class ConstantDeclaratorsRestContext extends ParserRuleContext {
	public constantDeclaratorRest(): ConstantDeclaratorRestContext {
		return this.getRuleContext(0, ConstantDeclaratorRestContext);
	}
	public constantDeclarator(): ConstantDeclaratorContext[];
	public constantDeclarator(i: number): ConstantDeclaratorContext;
	public constantDeclarator(i?: number): ConstantDeclaratorContext | ConstantDeclaratorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstantDeclaratorContext);
		} else {
			return this.getRuleContext(i, ConstantDeclaratorContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_constantDeclaratorsRest; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterConstantDeclaratorsRest) {
			listener.enterConstantDeclaratorsRest(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitConstantDeclaratorsRest) {
			listener.exitConstantDeclaratorsRest(this);
		}
	}
}


export class ConstantDeclaratorRestContext extends ParserRuleContext {
	public variableInitializer(): VariableInitializerContext {
		return this.getRuleContext(0, VariableInitializerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_constantDeclaratorRest; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterConstantDeclaratorRest) {
			listener.enterConstantDeclaratorRest(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitConstantDeclaratorRest) {
			listener.exitConstantDeclaratorRest(this);
		}
	}
}


export class VariableDeclaratorIdContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(JavaParser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_variableDeclaratorId; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterVariableDeclaratorId) {
			listener.enterVariableDeclaratorId(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitVariableDeclaratorId) {
			listener.exitVariableDeclaratorId(this);
		}
	}
}


export class VariableInitializerContext extends ParserRuleContext {
	public arrayInitializer(): ArrayInitializerContext | undefined {
		return this.tryGetRuleContext(0, ArrayInitializerContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_variableInitializer; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterVariableInitializer) {
			listener.enterVariableInitializer(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitVariableInitializer) {
			listener.exitVariableInitializer(this);
		}
	}
}


export class ArrayInitializerContext extends ParserRuleContext {
	public variableInitializer(): VariableInitializerContext[];
	public variableInitializer(i: number): VariableInitializerContext;
	public variableInitializer(i?: number): VariableInitializerContext | VariableInitializerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableInitializerContext);
		} else {
			return this.getRuleContext(i, VariableInitializerContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_arrayInitializer; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterArrayInitializer) {
			listener.enterArrayInitializer(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitArrayInitializer) {
			listener.exitArrayInitializer(this);
		}
	}
}


export class ModifierContext extends ParserRuleContext {
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_modifier; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterModifier) {
			listener.enterModifier(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitModifier) {
			listener.exitModifier(this);
		}
	}
}


export class PackageOrTypeNameContext extends ParserRuleContext {
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_packageOrTypeName; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterPackageOrTypeName) {
			listener.enterPackageOrTypeName(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitPackageOrTypeName) {
			listener.exitPackageOrTypeName(this);
		}
	}
}


export class EnumConstantNameContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(JavaParser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_enumConstantName; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterEnumConstantName) {
			listener.enterEnumConstantName(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitEnumConstantName) {
			listener.exitEnumConstantName(this);
		}
	}
}


export class TypeNameContext extends ParserRuleContext {
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_typeName; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterTypeName) {
			listener.enterTypeName(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitTypeName) {
			listener.exitTypeName(this);
		}
	}
}


export class TypeContext extends ParserRuleContext {
	public classOrInterfaceType(): ClassOrInterfaceTypeContext | undefined {
		return this.tryGetRuleContext(0, ClassOrInterfaceTypeContext);
	}
	public primitiveType(): PrimitiveTypeContext | undefined {
		return this.tryGetRuleContext(0, PrimitiveTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_type; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterType) {
			listener.enterType(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitType) {
			listener.exitType(this);
		}
	}
}


export class ClassOrInterfaceTypeContext extends ParserRuleContext {
	public Identifier(): TerminalNode[];
	public Identifier(i: number): TerminalNode;
	public Identifier(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaParser.Identifier);
		} else {
			return this.getToken(JavaParser.Identifier, i);
		}
	}
	public typeArguments(): TypeArgumentsContext[];
	public typeArguments(i: number): TypeArgumentsContext;
	public typeArguments(i?: number): TypeArgumentsContext | TypeArgumentsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeArgumentsContext);
		} else {
			return this.getRuleContext(i, TypeArgumentsContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_classOrInterfaceType; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterClassOrInterfaceType) {
			listener.enterClassOrInterfaceType(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitClassOrInterfaceType) {
			listener.exitClassOrInterfaceType(this);
		}
	}
}


export class PrimitiveTypeContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_primitiveType; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterPrimitiveType) {
			listener.enterPrimitiveType(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitPrimitiveType) {
			listener.exitPrimitiveType(this);
		}
	}
}


export class VariableModifierContext extends ParserRuleContext {
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_variableModifier; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterVariableModifier) {
			listener.enterVariableModifier(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitVariableModifier) {
			listener.exitVariableModifier(this);
		}
	}
}


export class TypeArgumentsContext extends ParserRuleContext {
	public typeArgument(): TypeArgumentContext[];
	public typeArgument(i: number): TypeArgumentContext;
	public typeArgument(i?: number): TypeArgumentContext | TypeArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeArgumentContext);
		} else {
			return this.getRuleContext(i, TypeArgumentContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_typeArguments; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterTypeArguments) {
			listener.enterTypeArguments(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitTypeArguments) {
			listener.exitTypeArguments(this);
		}
	}
}


export class TypeArgumentContext extends ParserRuleContext {
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_typeArgument; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterTypeArgument) {
			listener.enterTypeArgument(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitTypeArgument) {
			listener.exitTypeArgument(this);
		}
	}
}


export class QualifiedNameListContext extends ParserRuleContext {
	public qualifiedName(): QualifiedNameContext[];
	public qualifiedName(i: number): QualifiedNameContext;
	public qualifiedName(i?: number): QualifiedNameContext | QualifiedNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(QualifiedNameContext);
		} else {
			return this.getRuleContext(i, QualifiedNameContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_qualifiedNameList; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterQualifiedNameList) {
			listener.enterQualifiedNameList(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitQualifiedNameList) {
			listener.exitQualifiedNameList(this);
		}
	}
}


export class FormalParametersContext extends ParserRuleContext {
	public formalParameterDecls(): FormalParameterDeclsContext | undefined {
		return this.tryGetRuleContext(0, FormalParameterDeclsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_formalParameters; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterFormalParameters) {
			listener.enterFormalParameters(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitFormalParameters) {
			listener.exitFormalParameters(this);
		}
	}
}


export class FormalParameterDeclsContext extends ParserRuleContext {
	public variableModifiers(): VariableModifiersContext {
		return this.getRuleContext(0, VariableModifiersContext);
	}
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public formalParameterDeclsRest(): FormalParameterDeclsRestContext {
		return this.getRuleContext(0, FormalParameterDeclsRestContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_formalParameterDecls; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterFormalParameterDecls) {
			listener.enterFormalParameterDecls(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitFormalParameterDecls) {
			listener.exitFormalParameterDecls(this);
		}
	}
}


export class FormalParameterDeclsRestContext extends ParserRuleContext {
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		return this.getRuleContext(0, VariableDeclaratorIdContext);
	}
	public formalParameterDecls(): FormalParameterDeclsContext | undefined {
		return this.tryGetRuleContext(0, FormalParameterDeclsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_formalParameterDeclsRest; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterFormalParameterDeclsRest) {
			listener.enterFormalParameterDeclsRest(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitFormalParameterDeclsRest) {
			listener.exitFormalParameterDeclsRest(this);
		}
	}
}


export class MethodBodyContext extends ParserRuleContext {
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_methodBody; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterMethodBody) {
			listener.enterMethodBody(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitMethodBody) {
			listener.exitMethodBody(this);
		}
	}
}


export class ConstructorBodyContext extends ParserRuleContext {
	public explicitConstructorInvocation(): ExplicitConstructorInvocationContext | undefined {
		return this.tryGetRuleContext(0, ExplicitConstructorInvocationContext);
	}
	public blockStatement(): BlockStatementContext[];
	public blockStatement(i: number): BlockStatementContext;
	public blockStatement(i?: number): BlockStatementContext | BlockStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockStatementContext);
		} else {
			return this.getRuleContext(i, BlockStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_constructorBody; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterConstructorBody) {
			listener.enterConstructorBody(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitConstructorBody) {
			listener.exitConstructorBody(this);
		}
	}
}


export class ExplicitConstructorInvocationContext extends ParserRuleContext {
	public arguments(): ArgumentsContext {
		return this.getRuleContext(0, ArgumentsContext);
	}
	public nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, NonWildcardTypeArgumentsContext);
	}
	public primary(): PrimaryContext | undefined {
		return this.tryGetRuleContext(0, PrimaryContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_explicitConstructorInvocation; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterExplicitConstructorInvocation) {
			listener.enterExplicitConstructorInvocation(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitExplicitConstructorInvocation) {
			listener.exitExplicitConstructorInvocation(this);
		}
	}
}


export class QualifiedNameContext extends ParserRuleContext {
	public Identifier(): TerminalNode[];
	public Identifier(i: number): TerminalNode;
	public Identifier(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaParser.Identifier);
		} else {
			return this.getToken(JavaParser.Identifier, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_qualifiedName; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterQualifiedName) {
			listener.enterQualifiedName(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitQualifiedName) {
			listener.exitQualifiedName(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	public integerLiteral(): IntegerLiteralContext | undefined {
		return this.tryGetRuleContext(0, IntegerLiteralContext);
	}
	public FloatingPointLiteral(): TerminalNode | undefined { return this.tryGetToken(JavaParser.FloatingPointLiteral, 0); }
	public CharacterLiteral(): TerminalNode | undefined { return this.tryGetToken(JavaParser.CharacterLiteral, 0); }
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(JavaParser.StringLiteral, 0); }
	public booleanLiteral(): BooleanLiteralContext | undefined {
		return this.tryGetRuleContext(0, BooleanLiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_literal; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterLiteral) {
			listener.enterLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitLiteral) {
			listener.exitLiteral(this);
		}
	}
}


export class IntegerLiteralContext extends ParserRuleContext {
	public HexLiteral(): TerminalNode | undefined { return this.tryGetToken(JavaParser.HexLiteral, 0); }
	public OctalLiteral(): TerminalNode | undefined { return this.tryGetToken(JavaParser.OctalLiteral, 0); }
	public DecimalLiteral(): TerminalNode | undefined { return this.tryGetToken(JavaParser.DecimalLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_integerLiteral; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterIntegerLiteral) {
			listener.enterIntegerLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitIntegerLiteral) {
			listener.exitIntegerLiteral(this);
		}
	}
}


export class BooleanLiteralContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_booleanLiteral; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterBooleanLiteral) {
			listener.enterBooleanLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitBooleanLiteral) {
			listener.exitBooleanLiteral(this);
		}
	}
}


export class AnnotationsContext extends ParserRuleContext {
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_annotations; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterAnnotations) {
			listener.enterAnnotations(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitAnnotations) {
			listener.exitAnnotations(this);
		}
	}
}


export class AnnotationContext extends ParserRuleContext {
	public annotationName(): AnnotationNameContext {
		return this.getRuleContext(0, AnnotationNameContext);
	}
	public elementValuePairs(): ElementValuePairsContext | undefined {
		return this.tryGetRuleContext(0, ElementValuePairsContext);
	}
	public elementValue(): ElementValueContext | undefined {
		return this.tryGetRuleContext(0, ElementValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_annotation; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterAnnotation) {
			listener.enterAnnotation(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitAnnotation) {
			listener.exitAnnotation(this);
		}
	}
}


export class AnnotationNameContext extends ParserRuleContext {
	public Identifier(): TerminalNode[];
	public Identifier(i: number): TerminalNode;
	public Identifier(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaParser.Identifier);
		} else {
			return this.getToken(JavaParser.Identifier, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_annotationName; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterAnnotationName) {
			listener.enterAnnotationName(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitAnnotationName) {
			listener.exitAnnotationName(this);
		}
	}
}


export class ElementValuePairsContext extends ParserRuleContext {
	public elementValuePair(): ElementValuePairContext[];
	public elementValuePair(i: number): ElementValuePairContext;
	public elementValuePair(i?: number): ElementValuePairContext | ElementValuePairContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ElementValuePairContext);
		} else {
			return this.getRuleContext(i, ElementValuePairContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_elementValuePairs; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterElementValuePairs) {
			listener.enterElementValuePairs(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitElementValuePairs) {
			listener.exitElementValuePairs(this);
		}
	}
}


export class ElementValuePairContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(JavaParser.Identifier, 0); }
	public elementValue(): ElementValueContext {
		return this.getRuleContext(0, ElementValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_elementValuePair; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterElementValuePair) {
			listener.enterElementValuePair(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitElementValuePair) {
			listener.exitElementValuePair(this);
		}
	}
}


export class ElementValueContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	public elementValueArrayInitializer(): ElementValueArrayInitializerContext | undefined {
		return this.tryGetRuleContext(0, ElementValueArrayInitializerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_elementValue; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterElementValue) {
			listener.enterElementValue(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitElementValue) {
			listener.exitElementValue(this);
		}
	}
}


export class ElementValueArrayInitializerContext extends ParserRuleContext {
	public elementValue(): ElementValueContext[];
	public elementValue(i: number): ElementValueContext;
	public elementValue(i?: number): ElementValueContext | ElementValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ElementValueContext);
		} else {
			return this.getRuleContext(i, ElementValueContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_elementValueArrayInitializer; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterElementValueArrayInitializer) {
			listener.enterElementValueArrayInitializer(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitElementValueArrayInitializer) {
			listener.exitElementValueArrayInitializer(this);
		}
	}
}


export class AnnotationTypeDeclarationContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(JavaParser.Identifier, 0); }
	public annotationTypeBody(): AnnotationTypeBodyContext {
		return this.getRuleContext(0, AnnotationTypeBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_annotationTypeDeclaration; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterAnnotationTypeDeclaration) {
			listener.enterAnnotationTypeDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitAnnotationTypeDeclaration) {
			listener.exitAnnotationTypeDeclaration(this);
		}
	}
}


export class AnnotationTypeBodyContext extends ParserRuleContext {
	public annotationTypeElementDeclaration(): AnnotationTypeElementDeclarationContext[];
	public annotationTypeElementDeclaration(i: number): AnnotationTypeElementDeclarationContext;
	public annotationTypeElementDeclaration(i?: number): AnnotationTypeElementDeclarationContext | AnnotationTypeElementDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationTypeElementDeclarationContext);
		} else {
			return this.getRuleContext(i, AnnotationTypeElementDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_annotationTypeBody; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterAnnotationTypeBody) {
			listener.enterAnnotationTypeBody(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitAnnotationTypeBody) {
			listener.exitAnnotationTypeBody(this);
		}
	}
}


export class AnnotationTypeElementDeclarationContext extends ParserRuleContext {
	public modifiers(): ModifiersContext {
		return this.getRuleContext(0, ModifiersContext);
	}
	public annotationTypeElementRest(): AnnotationTypeElementRestContext {
		return this.getRuleContext(0, AnnotationTypeElementRestContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_annotationTypeElementDeclaration; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterAnnotationTypeElementDeclaration) {
			listener.enterAnnotationTypeElementDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitAnnotationTypeElementDeclaration) {
			listener.exitAnnotationTypeElementDeclaration(this);
		}
	}
}


export class AnnotationTypeElementRestContext extends ParserRuleContext {
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public annotationMethodOrConstantRest(): AnnotationMethodOrConstantRestContext | undefined {
		return this.tryGetRuleContext(0, AnnotationMethodOrConstantRestContext);
	}
	public classDeclaration(): ClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassDeclarationContext);
	}
	public normalInterfaceDeclaration(): NormalInterfaceDeclarationContext | undefined {
		return this.tryGetRuleContext(0, NormalInterfaceDeclarationContext);
	}
	public enumDeclaration(): EnumDeclarationContext | undefined {
		return this.tryGetRuleContext(0, EnumDeclarationContext);
	}
	public annotationTypeDeclaration(): AnnotationTypeDeclarationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationTypeDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_annotationTypeElementRest; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterAnnotationTypeElementRest) {
			listener.enterAnnotationTypeElementRest(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitAnnotationTypeElementRest) {
			listener.exitAnnotationTypeElementRest(this);
		}
	}
}


export class AnnotationMethodOrConstantRestContext extends ParserRuleContext {
	public annotationMethodRest(): AnnotationMethodRestContext | undefined {
		return this.tryGetRuleContext(0, AnnotationMethodRestContext);
	}
	public annotationConstantRest(): AnnotationConstantRestContext | undefined {
		return this.tryGetRuleContext(0, AnnotationConstantRestContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_annotationMethodOrConstantRest; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterAnnotationMethodOrConstantRest) {
			listener.enterAnnotationMethodOrConstantRest(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitAnnotationMethodOrConstantRest) {
			listener.exitAnnotationMethodOrConstantRest(this);
		}
	}
}


export class AnnotationMethodRestContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(JavaParser.Identifier, 0); }
	public defaultValue(): DefaultValueContext | undefined {
		return this.tryGetRuleContext(0, DefaultValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_annotationMethodRest; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterAnnotationMethodRest) {
			listener.enterAnnotationMethodRest(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitAnnotationMethodRest) {
			listener.exitAnnotationMethodRest(this);
		}
	}
}


export class AnnotationConstantRestContext extends ParserRuleContext {
	public variableDeclarators(): VariableDeclaratorsContext {
		return this.getRuleContext(0, VariableDeclaratorsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_annotationConstantRest; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterAnnotationConstantRest) {
			listener.enterAnnotationConstantRest(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitAnnotationConstantRest) {
			listener.exitAnnotationConstantRest(this);
		}
	}
}


export class DefaultValueContext extends ParserRuleContext {
	public elementValue(): ElementValueContext {
		return this.getRuleContext(0, ElementValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_defaultValue; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterDefaultValue) {
			listener.enterDefaultValue(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitDefaultValue) {
			listener.exitDefaultValue(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public blockStatement(): BlockStatementContext[];
	public blockStatement(i: number): BlockStatementContext;
	public blockStatement(i?: number): BlockStatementContext | BlockStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockStatementContext);
		} else {
			return this.getRuleContext(i, BlockStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_block; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
}


export class BlockStatementContext extends ParserRuleContext {
	public localVariableDeclarationStatement(): LocalVariableDeclarationStatementContext | undefined {
		return this.tryGetRuleContext(0, LocalVariableDeclarationStatementContext);
	}
	public classDeclaration(): ClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassDeclarationContext);
	}
	public interfaceDeclaration(): InterfaceDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InterfaceDeclarationContext);
	}
	public statement(): StatementContext | undefined {
		return this.tryGetRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_blockStatement; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterBlockStatement) {
			listener.enterBlockStatement(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitBlockStatement) {
			listener.exitBlockStatement(this);
		}
	}
}


export class LocalVariableDeclarationStatementContext extends ParserRuleContext {
	public localVariableDeclaration(): LocalVariableDeclarationContext {
		return this.getRuleContext(0, LocalVariableDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_localVariableDeclarationStatement; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterLocalVariableDeclarationStatement) {
			listener.enterLocalVariableDeclarationStatement(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitLocalVariableDeclarationStatement) {
			listener.exitLocalVariableDeclarationStatement(this);
		}
	}
}


export class LocalVariableDeclarationContext extends ParserRuleContext {
	public variableModifiers(): VariableModifiersContext {
		return this.getRuleContext(0, VariableModifiersContext);
	}
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public variableDeclarators(): VariableDeclaratorsContext {
		return this.getRuleContext(0, VariableDeclaratorsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_localVariableDeclaration; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterLocalVariableDeclaration) {
			listener.enterLocalVariableDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitLocalVariableDeclaration) {
			listener.exitLocalVariableDeclaration(this);
		}
	}
}


export class VariableModifiersContext extends ParserRuleContext {
	public variableModifier(): VariableModifierContext[];
	public variableModifier(i: number): VariableModifierContext;
	public variableModifier(i?: number): VariableModifierContext | VariableModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableModifierContext);
		} else {
			return this.getRuleContext(i, VariableModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_variableModifiers; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterVariableModifiers) {
			listener.enterVariableModifiers(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitVariableModifiers) {
			listener.exitVariableModifiers(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public block(): BlockContext[];
	public block(i: number): BlockContext;
	public block(i?: number): BlockContext | BlockContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockContext);
		} else {
			return this.getRuleContext(i, BlockContext);
		}
	}
	public ASSERT(): TerminalNode | undefined { return this.tryGetToken(JavaParser.ASSERT, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public parExpression(): ParExpressionContext | undefined {
		return this.tryGetRuleContext(0, ParExpressionContext);
	}
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public forControl(): ForControlContext | undefined {
		return this.tryGetRuleContext(0, ForControlContext);
	}
	public catches(): CatchesContext | undefined {
		return this.tryGetRuleContext(0, CatchesContext);
	}
	public switchBlock(): SwitchBlockContext | undefined {
		return this.tryGetRuleContext(0, SwitchBlockContext);
	}
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(JavaParser.Identifier, 0); }
	public statementExpression(): StatementExpressionContext | undefined {
		return this.tryGetRuleContext(0, StatementExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_statement; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
}


export class CatchesContext extends ParserRuleContext {
	public catchClause(): CatchClauseContext[];
	public catchClause(i: number): CatchClauseContext;
	public catchClause(i?: number): CatchClauseContext | CatchClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CatchClauseContext);
		} else {
			return this.getRuleContext(i, CatchClauseContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_catches; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterCatches) {
			listener.enterCatches(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitCatches) {
			listener.exitCatches(this);
		}
	}
}


export class CatchClauseContext extends ParserRuleContext {
	public formalParameter(): FormalParameterContext {
		return this.getRuleContext(0, FormalParameterContext);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_catchClause; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterCatchClause) {
			listener.enterCatchClause(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitCatchClause) {
			listener.exitCatchClause(this);
		}
	}
}


export class FormalParameterContext extends ParserRuleContext {
	public variableModifiers(): VariableModifiersContext {
		return this.getRuleContext(0, VariableModifiersContext);
	}
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		return this.getRuleContext(0, VariableDeclaratorIdContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_formalParameter; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterFormalParameter) {
			listener.enterFormalParameter(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitFormalParameter) {
			listener.exitFormalParameter(this);
		}
	}
}


export class SwitchBlockContext extends ParserRuleContext {
	public switchBlockStatementGroup(): SwitchBlockStatementGroupContext[];
	public switchBlockStatementGroup(i: number): SwitchBlockStatementGroupContext;
	public switchBlockStatementGroup(i?: number): SwitchBlockStatementGroupContext | SwitchBlockStatementGroupContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SwitchBlockStatementGroupContext);
		} else {
			return this.getRuleContext(i, SwitchBlockStatementGroupContext);
		}
	}
	public switchLabel(): SwitchLabelContext[];
	public switchLabel(i: number): SwitchLabelContext;
	public switchLabel(i?: number): SwitchLabelContext | SwitchLabelContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SwitchLabelContext);
		} else {
			return this.getRuleContext(i, SwitchLabelContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_switchBlock; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterSwitchBlock) {
			listener.enterSwitchBlock(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitSwitchBlock) {
			listener.exitSwitchBlock(this);
		}
	}
}


export class SwitchBlockStatementGroupContext extends ParserRuleContext {
	public switchLabel(): SwitchLabelContext[];
	public switchLabel(i: number): SwitchLabelContext;
	public switchLabel(i?: number): SwitchLabelContext | SwitchLabelContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SwitchLabelContext);
		} else {
			return this.getRuleContext(i, SwitchLabelContext);
		}
	}
	public blockStatement(): BlockStatementContext[];
	public blockStatement(i: number): BlockStatementContext;
	public blockStatement(i?: number): BlockStatementContext | BlockStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockStatementContext);
		} else {
			return this.getRuleContext(i, BlockStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_switchBlockStatementGroup; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterSwitchBlockStatementGroup) {
			listener.enterSwitchBlockStatementGroup(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitSwitchBlockStatementGroup) {
			listener.exitSwitchBlockStatementGroup(this);
		}
	}
}


export class SwitchLabelContext extends ParserRuleContext {
	public constantExpression(): ConstantExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConstantExpressionContext);
	}
	public enumConstantName(): EnumConstantNameContext | undefined {
		return this.tryGetRuleContext(0, EnumConstantNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_switchLabel; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterSwitchLabel) {
			listener.enterSwitchLabel(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitSwitchLabel) {
			listener.exitSwitchLabel(this);
		}
	}
}


export class ForControlContext extends ParserRuleContext {
	public enhancedForControl(): EnhancedForControlContext | undefined {
		return this.tryGetRuleContext(0, EnhancedForControlContext);
	}
	public forInit(): ForInitContext | undefined {
		return this.tryGetRuleContext(0, ForInitContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public forUpdate(): ForUpdateContext | undefined {
		return this.tryGetRuleContext(0, ForUpdateContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_forControl; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterForControl) {
			listener.enterForControl(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitForControl) {
			listener.exitForControl(this);
		}
	}
}


export class ForInitContext extends ParserRuleContext {
	public localVariableDeclaration(): LocalVariableDeclarationContext | undefined {
		return this.tryGetRuleContext(0, LocalVariableDeclarationContext);
	}
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_forInit; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterForInit) {
			listener.enterForInit(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitForInit) {
			listener.exitForInit(this);
		}
	}
}


export class EnhancedForControlContext extends ParserRuleContext {
	public variableModifiers(): VariableModifiersContext {
		return this.getRuleContext(0, VariableModifiersContext);
	}
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public Identifier(): TerminalNode { return this.getToken(JavaParser.Identifier, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_enhancedForControl; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterEnhancedForControl) {
			listener.enterEnhancedForControl(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitEnhancedForControl) {
			listener.exitEnhancedForControl(this);
		}
	}
}


export class ForUpdateContext extends ParserRuleContext {
	public expressionList(): ExpressionListContext {
		return this.getRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_forUpdate; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterForUpdate) {
			listener.enterForUpdate(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitForUpdate) {
			listener.exitForUpdate(this);
		}
	}
}


export class ParExpressionContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_parExpression; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterParExpression) {
			listener.enterParExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitParExpression) {
			listener.exitParExpression(this);
		}
	}
}


export class ExpressionListContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_expressionList; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterExpressionList) {
			listener.enterExpressionList(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitExpressionList) {
			listener.exitExpressionList(this);
		}
	}
}


export class StatementExpressionContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_statementExpression; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterStatementExpression) {
			listener.enterStatementExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitStatementExpression) {
			listener.exitStatementExpression(this);
		}
	}
}


export class ConstantExpressionContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_constantExpression; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterConstantExpression) {
			listener.enterConstantExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitConstantExpression) {
			listener.exitConstantExpression(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public primary(): PrimaryContext | undefined {
		return this.tryGetRuleContext(0, PrimaryContext);
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(JavaParser.Identifier, 0); }
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	public arguments(): ArgumentsContext | undefined {
		return this.tryGetRuleContext(0, ArgumentsContext);
	}
	public explicitGenericInvocation(): ExplicitGenericInvocationContext | undefined {
		return this.tryGetRuleContext(0, ExplicitGenericInvocationContext);
	}
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public creator(): CreatorContext | undefined {
		return this.tryGetRuleContext(0, CreatorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_expression; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
}


export class PrimaryContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(JavaParser.Identifier, 0); }
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_primary; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterPrimary) {
			listener.enterPrimary(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitPrimary) {
			listener.exitPrimary(this);
		}
	}
}


export class CreatorContext extends ParserRuleContext {
	public nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, NonWildcardTypeArgumentsContext);
	}
	public createdName(): CreatedNameContext {
		return this.getRuleContext(0, CreatedNameContext);
	}
	public classCreatorRest(): ClassCreatorRestContext | undefined {
		return this.tryGetRuleContext(0, ClassCreatorRestContext);
	}
	public arrayCreatorRest(): ArrayCreatorRestContext | undefined {
		return this.tryGetRuleContext(0, ArrayCreatorRestContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_creator; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterCreator) {
			listener.enterCreator(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitCreator) {
			listener.exitCreator(this);
		}
	}
}


export class CreatedNameContext extends ParserRuleContext {
	public classOrInterfaceType(): ClassOrInterfaceTypeContext | undefined {
		return this.tryGetRuleContext(0, ClassOrInterfaceTypeContext);
	}
	public primitiveType(): PrimitiveTypeContext | undefined {
		return this.tryGetRuleContext(0, PrimitiveTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_createdName; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterCreatedName) {
			listener.enterCreatedName(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitCreatedName) {
			listener.exitCreatedName(this);
		}
	}
}


export class InnerCreatorContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(JavaParser.Identifier, 0); }
	public classCreatorRest(): ClassCreatorRestContext {
		return this.getRuleContext(0, ClassCreatorRestContext);
	}
	public nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, NonWildcardTypeArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_innerCreator; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterInnerCreator) {
			listener.enterInnerCreator(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitInnerCreator) {
			listener.exitInnerCreator(this);
		}
	}
}


export class ExplicitGenericInvocationContext extends ParserRuleContext {
	public nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext {
		return this.getRuleContext(0, NonWildcardTypeArgumentsContext);
	}
	public Identifier(): TerminalNode { return this.getToken(JavaParser.Identifier, 0); }
	public arguments(): ArgumentsContext {
		return this.getRuleContext(0, ArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_explicitGenericInvocation; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterExplicitGenericInvocation) {
			listener.enterExplicitGenericInvocation(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitExplicitGenericInvocation) {
			listener.exitExplicitGenericInvocation(this);
		}
	}
}


export class ArrayCreatorRestContext extends ParserRuleContext {
	public arrayInitializer(): ArrayInitializerContext | undefined {
		return this.tryGetRuleContext(0, ArrayInitializerContext);
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_arrayCreatorRest; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterArrayCreatorRest) {
			listener.enterArrayCreatorRest(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitArrayCreatorRest) {
			listener.exitArrayCreatorRest(this);
		}
	}
}


export class ClassCreatorRestContext extends ParserRuleContext {
	public arguments(): ArgumentsContext {
		return this.getRuleContext(0, ArgumentsContext);
	}
	public classBody(): ClassBodyContext | undefined {
		return this.tryGetRuleContext(0, ClassBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_classCreatorRest; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterClassCreatorRest) {
			listener.enterClassCreatorRest(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitClassCreatorRest) {
			listener.exitClassCreatorRest(this);
		}
	}
}


export class NonWildcardTypeArgumentsContext extends ParserRuleContext {
	public typeList(): TypeListContext {
		return this.getRuleContext(0, TypeListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_nonWildcardTypeArguments; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterNonWildcardTypeArguments) {
			listener.enterNonWildcardTypeArguments(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitNonWildcardTypeArguments) {
			listener.exitNonWildcardTypeArguments(this);
		}
	}
}


export class ArgumentsContext extends ParserRuleContext {
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavaParser.RULE_arguments; }
	// @Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterArguments) {
			listener.enterArguments(this);
		}
	}
	// @Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitArguments) {
			listener.exitArguments(this);
		}
	}
}


